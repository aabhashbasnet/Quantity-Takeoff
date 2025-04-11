"use client"

import { useState } from "react"
import { Upload, FileText, X, Check, ImageIcon } from "lucide-react"

const UploadDrawings = ({ onImagesUploaded }) => {
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [processedImages, setProcessedImages] = useState([])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    addFiles(droppedFiles)
  }

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files)
    addFiles(selectedFiles)
  }

  const addFiles = (newFiles) => {
    // Filter for image files and PDFs
    const validFiles = newFiles.filter(
      (file) =>
        file.type.startsWith("image/") || file.type === "application/pdf" || file.name.toLowerCase().endsWith(".dwg"),
    )

    // Add new files to the list
    setFiles((prevFiles) => [
      ...prevFiles,
      ...validFiles.map((file) => ({
        file,
        id: Date.now() + Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        progress: 0,
        status: "pending",
      })),
    ])

    // Process image files
    validFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        processImageFile(file)
      }
      simulateUpload(Date.now() + Math.random().toString(36).substring(2, 9))
    })
  }

  const processImageFile = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        setProcessedImages((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random().toString(36).substring(2, 9),
            src: e.target.result,
            name: file.name,
            width: img.width,
            height: img.height,
            type: "image",
          },
        ])
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }

  const simulateUpload = (fileId) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 5

      if (progress >= 100) {
        clearInterval(interval)
        progress = 100

        setFiles((prevFiles) =>
          prevFiles.map((file) => (file.id === fileId ? { ...file, progress, status: "complete" } : file)),
        )
      } else {
        setFiles((prevFiles) => prevFiles.map((file) => (file.id === fileId ? { ...file, progress } : file)))
      }
    }, 300)
  }

  const removeFile = (fileId) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.id !== fileId))
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  const handleImportDrawings = () => {
    // Pass the processed images to the parent component and redirect to canvas
    if (onImagesUploaded && processedImages.length > 0) {
      onImagesUploaded(processedImages, true) // Added second parameter to indicate redirect
    }
  }

  // File type icon
  const getFileIcon = (fileType, fileName) => {
    if (fileType.startsWith("image/")) {
      return <ImageIcon className="h-6 w-6 text-blue-500" />
    } else if (fileType === "application/pdf") {
      return <FileText className="h-6 w-6 text-red-500" />
    } else if (fileName.toLowerCase().endsWith(".dwg")) {
      return <FileText className="h-6 w-6 text-green-500" />
    }
    return <FileText className="h-6 w-6 text-gray-500" />
  }

  return (
    <div className="p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Upload Drawings</h2>

      {/* Upload area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 mb-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input").click()}
      >
        <Upload className="h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium mb-1">Drag and drop your files here</p>
        <p className="text-sm text-gray-500 mb-4">or click to browse</p>
        <p className="text-xs text-gray-400">Supported formats: JPG, PNG, PDF, DWG</p>
        <input
          id="file-input"
          type="file"
          multiple
          accept="image/*,.pdf,.dwg"
          className="hidden"
          onChange={handleFileInput}
        />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="flex-1 overflow-auto">
          <h3 className="font-medium mb-3">Uploaded Files</h3>
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.id} className="bg-white rounded-lg shadow p-4 flex items-center">
                <div className="bg-gray-100 p-2 rounded mr-3">{getFileIcon(file.file.type, file.name)}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <span>{formatFileSize(file.size)}</span>
                    <span className="mx-2">•</span>
                    <span>{file.status === "complete" ? "Uploaded" : "Uploading..."}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${file.progress}%` }}></div>
                  </div>
                </div>
                {file.status === "complete" ? (
                  <div className="ml-3 bg-green-100 p-1 rounded-full">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                ) : (
                  <button
                    className="ml-3 text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(file.id)
                    }}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preview of processed images */}
      {processedImages.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium mb-3">Image Previews</h3>
          <div className="grid grid-cols-3 gap-4">
            {processedImages.map((img) => (
              <div key={img.id} className="relative group">
                <img
                  src={img.src || "/placeholder.svg"}
                  alt={img.name}
                  className="w-full h-32 object-cover rounded-md border border-gray-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-md flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 text-white text-xs p-1">{img.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Cancel</button>
        <button
          className={`px-4 py-2 rounded-md ${
            processedImages.length > 0
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleImportDrawings}
          disabled={processedImages.length === 0}
        >
          Import Drawings
        </button>
      </div>
    </div>
  )
}

export default UploadDrawings
