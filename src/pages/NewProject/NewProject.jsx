import React, { useState, useRef, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUpload,
  FaFileAlt,
  FaTrash,
  FaEdit,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

const URLImage = ({ file, stageWidth, stageHeight }) => {
  const imageUrl = useMemo(() => URL.createObjectURL(file), [file]);
  const [image] = useImage(imageUrl);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (image) {
      const scaleX = stageWidth / image.width;
      const scaleY = stageHeight / image.height;
      const minScale = Math.min(scaleX, scaleY, 1);
      
      setScale(minScale);
      setPosition({
        x: (stageWidth - image.width * minScale) / 2,
        y: (stageHeight - image.height * minScale) / 2
      });
    }
  }, [image, stageWidth, stageHeight]);

  useEffect(() => {
    return () => URL.revokeObjectURL(imageUrl);
  }, [imageUrl]);

  return image ? (
    <KonvaImage 
      image={image}
      x={position.x}
      y={position.y}
      scaleX={scale}
      scaleY={scale}
    />
  ) : null;
};

const NewProject = () => {
  const [projectName, setProjectName] = useState("New Project");
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [materialCost, setMaterialCost] = useState("$0");
  const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
    setProgress(100);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
    setProgress(100);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const deleteFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    if (selectedFileIndex === index) setSelectedFileIndex(null);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">New Project</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/upload" className="hover:text-gray-200">
                Upload
              </Link>
            </li>
            <li>
              <Link to="/analysis" className="hover:text-gray-200">
                Analysis
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-gray-200">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/settings" className="hover:text-gray-200">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Overview Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">{projectName}</h1>
          <p className="text-gray-600 mb-4">Uploaded Files: {files.length}</p>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </section>

        {/* Drag and Drop Upload Box */}
        <section className="mb-8">
          <div
            className="border-4 border-dashed border-gray-400 rounded-lg p-8 flex flex-col items-center justify-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <FaUpload className="text-5xl text-gray-500 mb-4" />
            <p className="text-lg text-gray-600 mb-4">
              Drag and drop your files here, or click to upload
            </p>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              ref={fileInputRef}
              className="hidden"
              id="fileInput"
              accept="image/*,application/pdf"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              Select Files
            </label>
          </div>
        </section>

        {/* File List with Previews */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Files</h2>
          {files.length > 0 ? (
            <ul className="space-y-4">
              {files.map((file, index) => (
                <li
                  key={index}
                  className={`flex items-center justify-between bg-white p-4 rounded-lg shadow cursor-pointer ${
                    selectedFileIndex === index ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedFileIndex(index)}
                >
                  <div className="flex items-center space-x-4">
                    <FaFileAlt className="text-blue-600 text-2xl" />
                    <span>{file.name}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteFile(index);
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No files uploaded yet.</p>
          )}
        </section>

        {/* Canvas Display for Selected File */}
        {selectedFileIndex !== null && files[selectedFileIndex] && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Preview & Edit</h2>
            <div className="border border-gray-300 mb-4 overflow-hidden">
              <Stage 
                width={800} 
                height={600}
                style={{ maxWidth: '100%', maxHeight: '600px' }}
              >
                <Layer>
                  <URLImage 
                    file={files[selectedFileIndex]}
                    stageWidth={800}
                    stageHeight={600}
                  />
                </Layer>
              </Stage>
            </div>
            <div className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Calculate Area
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Measure Distance
              </button>
            </div>
          </section>
        )}

        {/* Material Cost Estimates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Material Cost Estimates
          </h2>
          <p className="text-lg text-gray-600">
            Estimated Cost: {materialCost}
          </p>
        </section>

        {/* Multi-page Navigation */}
        <section className="flex justify-between">
          <button
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            onClick={() =>
              setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
            }
          >
            <FaArrowLeft />
            <span>Previous</span>
          </button>
          <span className="text-lg font-semibold">Page {currentPage}</span>
          <button
            className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          >
            <span>Next</span>
            <FaArrowRight />
          </button>
        </section>
      </main>
    </div>
  );
};

export default NewProject;