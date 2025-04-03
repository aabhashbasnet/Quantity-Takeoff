import { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function TakeoffTool() {
  const [file, setFile] = useState(null);
  const [annotations, setAnnotations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [selectedTool, setSelectedTool] = useState('line');

  // PDF handling
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setCurrentPage(1);
  }

  // Dropzone configuration
  const onDrop = useCallback((acceptedFiles) => {
    const acceptedFile = acceptedFiles[0];
    if (acceptedFile) {
      setFile(acceptedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.png', '.jpg'],
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  // Canvas drawing handlers
  const startDrawing = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      setDrawing(true);
      setStartPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const draw = (e) => {
    if (!drawing || !canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    const rect = canvasRef.current.getBoundingClientRect();
    const currentX = e.clientX - rect.left;
    const currentY = e.clientY - rect.top;

    if (ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      
      // Redraw existing annotations
      annotations.forEach(ann => {
        drawAnnotation(ctx, ann);
      });

      // Draw temporary annotation
      ctx.beginPath();
      ctx.moveTo(startPos.x, startPos.y);
      ctx.lineTo(currentX, currentY);
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  };

  const endDrawing = () => {
    if (drawing && canvasRef.current) {
      setDrawing(false);
      const newAnnotation = {
        type: selectedTool,
        start: startPos,
        end: { x: 0, y: 0 }, // Update with actual end position
        color: '#ff0000'
      };
      setAnnotations([...annotations, newAnnotation]);
    }
  };

  const drawAnnotation = (ctx, annotation) => {
    ctx.beginPath();
    ctx.moveTo(annotation.start.x, annotation.start.y);
    ctx.lineTo(annotation.end.x, annotation.end.y);
    ctx.strokeStyle = annotation.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toolbar */}
      <div className="bg-white shadow-md p-4 flex gap-4">
        <select 
          value={selectedTool}
          onChange={(e) => setSelectedTool(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="line">Line</option>
          <option value="rectangle">Rectangle</option>
          <option value="text">Text</option>
        </select>
      </div>

      <div className="container mx-auto p-4">
        {!file ? (
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center 
              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          >
            <input {...getInputProps()} />
            <p>Drag & drop plans here, or click to select</p>
            <p className="text-sm text-gray-500">Supports: PDF, JPG, PNG</p>
          </div>
        ) : (
          <div className="relative">
            {/* Preview Area */}
            {file.type.startsWith('image/') ? (
              <div className="relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded plan"
                  className="max-w-full h-auto border"
                />
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={endDrawing}
                  onMouseLeave={endDrawing}
                />
              </div>
            ) : (
              <div className="relative">
                <Document
                  file={file}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="border"
                >
                  <Page 
                    pageNumber={currentPage} 
                    width={800}
                  />
                </Document>
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 left-0 w-full h-full"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={endDrawing}
                  onMouseLeave={endDrawing}
                />
              </div>
            )}

            {/* PDF Controls */}
            {file?.type === 'application/pdf' && (
              <div className="mt-4 flex gap-4 items-center">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage <= 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span>
                  Page {currentPage} of {numPages}
                </span>
                <button
                  onClick={() => setCurrentPage(Math.min(currentPage + 1, numPages || 1))}
                  disabled={currentPage >= (numPages || 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}