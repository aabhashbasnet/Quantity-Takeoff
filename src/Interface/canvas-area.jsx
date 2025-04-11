"use client"

import { useState, useEffect, useRef } from "react"
import { Stage, Layer, Line, Circle, Rect, Text, Image as KonvaImage } from "react-konva"
import {
  MousePointer,
  Ruler,
  Square,
  CircleIcon,
  Pencil,
  Type,
  Move,
  Layers,
  Trash2,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Eye,
  EyeOff,
} from "lucide-react"
import UploadDrawings from "./upload-drawings"

const CanvasArea = ({ onElementSelect, activeNavItem, onImagesImported }) => {
  const [activeTool, setActiveTool] = useState("select")
  const [showGrid, setShowGrid] = useState(true) // Controls grid visibility
  const [shapes, setShapes] = useState([]) // Store all drawn shapes
  const [isDrawing, setIsDrawing] = useState(false) // Track if the user is drawing
  const [tempShape, setTempShape] = useState(null) // Temporary shape while drawing
  const [uploadedImages, setUploadedImages] = useState([]) // Store uploaded images
  const [selectedShapeId, setSelectedShapeId] = useState(null) // Track selected shape
  const [stageScale, setStageScale] = useState(1) // For zoom
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 }) // For pan
  const stageRef = useRef(null)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [activeImageIndex, setActiveImageIndex] = useState(0) // Track active image index
  const [showImageGallery, setShowImageGallery] = useState(false) // Toggle image gallery
  const [nonImageShapes, setNonImageShapes] = useState([]) // Store non-image shapes
  const [imageVisibility, setImageVisibility] = useState({}) // Track which images are visible

  const tools = [
    { id: "select", icon: MousePointer, label: "Select" },
    { id: "measure", icon: Ruler, label: "Measure" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: CircleIcon, label: "Circle" },
    { id: "draw", icon: Pencil, label: "Draw" },
    { id: "text", icon: Type, label: "Text" },
    { id: "pan", icon: Move, label: "Pan" },
    { id: "image", icon: ImageIcon, label: "Images" },
  ]

  // Separate image shapes from other shapes
  useEffect(() => {
    // Filter out image shapes from all shapes
    const imageShapes = shapes.filter((shape) => shape.type === "image")
    const otherShapes = shapes.filter((shape) => shape.type !== "image")

    // Store non-image shapes separately
    setNonImageShapes(otherShapes)
  }, [shapes])

  // Initialize image visibility when images change
  useEffect(() => {
    const newVisibility = {}
    uploadedImages.forEach((img) => {
      // If not already in state, set to visible by default
      if (imageVisibility[img.id] === undefined) {
        newVisibility[img.id] = true
      } else {
        newVisibility[img.id] = imageVisibility[img.id]
      }
    })
    setImageVisibility(newVisibility)
  }, [uploadedImages])

  // Handle images uploaded from UploadDrawings component
  const handleImagesUploaded = (images, shouldRedirect = false) => {
    console.log("Received images:", images)

    // Process the uploaded images
    const newImageShapes = images.map((img) => {
      // Calculate a reasonable size for the image on canvas
      const maxWidth = window.innerWidth * 0.7
      const maxHeight = window.innerHeight * 0.7

      let width = img.width
      let height = img.height

      // Scale down large images
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height)
        width *= ratio
        height *= ratio
      }

      return {
        id: img.id,
        type: "image",
        x: (window.innerWidth - width) / 2,
        y: (window.innerHeight - height) / 2,
        width: width,
        height: height,
        src: img.src,
        name: img.name,
        draggable: true,
      }
    })

    // Add the new image shapes to the existing shapes
    setShapes((prevShapes) => {
      // Filter out existing image shapes if we want to replace them
      const nonImageShapes = prevShapes.filter((shape) => shape.type !== "image")

      // Add only the currently active image to the visible shapes
      const visibleShapes = [...nonImageShapes]

      // Add all image shapes to the state for tracking
      return [...nonImageShapes, ...newImageShapes]
    })

    // Update the uploaded images array
    setUploadedImages((prevImages) => [...prevImages, ...images])

    // Set the active image to the first new image
    if (images.length > 0) {
      setActiveImageIndex(uploadedImages.length)
    }

    // If shouldRedirect is true, notify parent to change activeNavItem to dashboard
    if (shouldRedirect && onImagesImported) {
      onImagesImported()
      // Show the image gallery when redirected back
      setShowImageGallery(true)
    }
  }

  // Navigate to previous image
  const goToPreviousImage = () => {
    if (uploadedImages.length > 0) {
      setActiveImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : uploadedImages.length - 1))
    }
  }

  // Navigate to next image
  const goToNextImage = () => {
    if (uploadedImages.length > 0) {
      setActiveImageIndex((prevIndex) => (prevIndex < uploadedImages.length - 1 ? prevIndex + 1 : 0))
    }
  }

  // Select a specific image by index
  const selectImage = (index) => {
    if (index >= 0 && index < uploadedImages.length) {
      setActiveImageIndex(index)
    }
  }

  // Center the view on a specific image
  const centerViewOnImage = (imageId) => {
    const imageShape = shapes.find((shape) => shape.id === imageId)

    if (imageShape && stageRef.current) {
      const stage = stageRef.current
      const stageWidth = stage.width()
      const stageHeight = stage.height()

      // Calculate center position
      const x = stageWidth / 2 - (imageShape.x + imageShape.width / 2) * stageScale
      const y = stageHeight / 2 - (imageShape.y + imageShape.height / 2) * stageScale

      setStagePosition({ x, y })
    }
  }

  // Toggle visibility of an image
  const toggleImageVisibility = (imageId) => {
    setImageVisibility((prev) => ({
      ...prev,
      [imageId]: !prev[imageId],
    }))
  }

  // Simulate selecting an element
  const handleCanvasClick = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage()

    if (clickedOnEmpty) {
      // Clicked on empty canvas
      setSelectedShapeId(null)
      return
    }

    if (activeTool === "select") {
      const shape = e.target
      const shapeId = shape.id()

      setSelectedShapeId(shapeId)

      // Find the shape data to pass to element select
      const shapeData = shapes.find((s) => s.id === shapeId)

      if (shapeData) {
        const mockElement = {
          id: shapeData.id,
          type: shapeData.type === "image" ? "Image" : "Shape",
          name: shapeData.name || `${shapeData.type} ${shapeId}`,
          width: shapeData.width || shapeData.radius * 2,
          height: shapeData.height || shapeData.radius * 2,
          x: shapeData.x,
          y: shapeData.y,
        }
        onElementSelect(mockElement)

        // If it's an image, update the active image index
        if (shapeData.type === "image") {
          const imageIndex = uploadedImages.findIndex((img) => img.id === shapeId)
          if (imageIndex !== -1) {
            setActiveImageIndex(imageIndex)
          }
        }
      }
    }
  }

  // Handle mouse down event
  const handleMouseDown = (e) => {
    if (activeTool === "pan") {
      // Enable dragging for pan tool
      const stage = e.target.getStage()
      stage.draggable(true)
      return
    }

    // Disable stage dragging for other tools
    if (stageRef.current) {
      stageRef.current.draggable(false)
    }

    const pos = e.target.getStage().getPointerPosition()
    const id = Date.now().toString()

    setIsDrawing(true)

    if (activeTool === "draw") {
      setTempShape({
        id,
        type: "line",
        points: [pos.x, pos.y],
        stroke: "#3B82F6",
        strokeWidth: 2,
      })
    } else if (activeTool === "rectangle") {
      setTempShape({
        id,
        type: "rect",
        x: pos.x,
        y: pos.y,
        width: 0,
        height: 0,
        fill: "#4CAF50",
        stroke: "#000",
        strokeWidth: 2,
        draggable: true,
      })
    } else if (activeTool === "circle") {
      setTempShape({
        id,
        type: "circle",
        x: pos.x,
        y: pos.y,
        radius: 0,
        fill: "#FF6347",
        stroke: "#000",
        strokeWidth: 2,
        draggable: true,
      })
    } else if (activeTool === "text") {
      setShapes((prevShapes) => [
        ...prevShapes,
        {
          id,
          type: "text",
          x: pos.x,
          y: pos.y,
          text: "Double-click to edit",
          fontSize: 20,
          fill: "#000",
          draggable: true,
        },
      ])
    }
  }

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDrawing || !tempShape) return

    const pos = e.target.getStage().getPointerPosition()

    if (activeTool === "draw") {
      setTempShape((prevShape) => ({
        ...prevShape,
        points: [...prevShape.points, pos.x, pos.y],
      }))
    } else if (activeTool === "rectangle") {
      setTempShape((prevShape) => ({
        ...prevShape,
        width: pos.x - prevShape.x,
        height: pos.y - prevShape.y,
      }))
    } else if (activeTool === "circle") {
      const dx = pos.x - tempShape.x
      const dy = pos.y - tempShape.y
      const radius = Math.sqrt(dx * dx + dy * dy)
      setTempShape((prevShape) => ({
        ...prevShape,
        radius,
      }))
    }
  }

  // Handle mouse up event
  const handleMouseUp = () => {
    if (isDrawing && tempShape) {
      setShapes((prevShapes) => [...prevShapes, tempShape])
      setTempShape(null)
    }
    setIsDrawing(false)

    // Reset pan tool
    if (activeTool === "pan" && stageRef.current) {
      stageRef.current.draggable(true)
    } else if (stageRef.current) {
      stageRef.current.draggable(false)
    }
  }

  // Clear canvas function
  const clearCanvas = () => {
    setShapes([])
    setTempShape(null)
    setSelectedShapeId(null)
    setUploadedImages([])
    setActiveImageIndex(0)
    setImageVisibility({})
  }

  // Delete selected shape
  const deleteSelectedShape = () => {
    if (selectedShapeId) {
      const shapeToDelete = shapes.find((shape) => shape.id === selectedShapeId)

      // If it's an image, also remove from uploadedImages
      if (shapeToDelete && shapeToDelete.type === "image") {
        const newUploadedImages = uploadedImages.filter((img) => img.id !== selectedShapeId)
        setUploadedImages(newUploadedImages)

        // Update active image index if needed
        if (newUploadedImages.length > 0) {
          if (activeImageIndex >= newUploadedImages.length) {
            setActiveImageIndex(newUploadedImages.length - 1)
          }
        } else {
          setActiveImageIndex(0)
        }

        // Remove from visibility tracking
        const newVisibility = { ...imageVisibility }
        delete newVisibility[selectedShapeId]
        setImageVisibility(newVisibility)
      }

      setShapes(shapes.filter((shape) => shape.id !== selectedShapeId))
      setSelectedShapeId(null)
    }
  }

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Delete key to remove selected shape
      if (e.key === "Delete" && selectedShapeId) {
        deleteSelectedShape()
      }

      // Escape key to deselect
      if (e.key === "Escape") {
        setSelectedShapeId(null)
      }

      // Left arrow to go to previous image
      if (e.key === "ArrowLeft" && uploadedImages.length > 0) {
        goToPreviousImage()
      }

      // Right arrow to go to next image
      if (e.key === "ArrowRight" && uploadedImages.length > 0) {
        goToNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedShapeId, shapes, uploadedImages, activeImageIndex])

  // Handle wheel event for zooming
  const handleWheel = (e) => {
    e.evt.preventDefault()

    const scaleBy = 1.1
    const stage = e.target.getStage()
    const oldScale = stage.scaleX()

    const pointerPosition = stage.getPointerPosition()
    const mousePointTo = {
      x: (pointerPosition.x - stage.x()) / oldScale,
      y: (pointerPosition.y - stage.y()) / oldScale,
    }

    // Calculate new scale
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    // Limit zoom levels
    const limitedScale = Math.max(0.1, Math.min(newScale, 5))

    setStageScale(limitedScale)

    // Calculate new position
    const newPos = {
      x: pointerPosition.x - mousePointTo.x * limitedScale,
      y: pointerPosition.y - mousePointTo.y * limitedScale,
    }

    setStagePosition(newPos)
  }

  const handleImageLoad = (id, image) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [id]: image,
    }))
  }

  // Get the currently active image
  const getActiveImage = () => {
    if (uploadedImages.length === 0 || activeImageIndex >= uploadedImages.length) {
      return null
    }

    const activeImage = uploadedImages[activeImageIndex]
    return shapes.find((shape) => shape.type === "image" && shape.id === activeImage.id)
  }

  // Get all shapes to render (non-image shapes + active image only)
  const getShapesToRender = () => {
    // Get all non-image shapes
    const otherShapes = shapes.filter((shape) => shape.type !== "image")

    // Get the active image shape
    const activeImage = getActiveImage()

    // Return all non-image shapes plus the active image (if any)
    return activeImage ? [...otherShapes, activeImage] : otherShapes
  }

  return (
    <div className="h-full flex flex-col">
      {activeNavItem === "upload" ? (
        <UploadDrawings onImagesUploaded={handleImagesUploaded} />
      ) : (
        <>
          {/* Toolbar */}
          <div className="bg-white border-b border-gray-200 p-2 flex items-center">
            {tools.map((tool) => (
              <button
                key={tool.id}
                className={`p-2 rounded-md mr-1 ${
                  activeTool === tool.id ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                }`}
                title={tool.label}
                onClick={() => setActiveTool(tool.id)}
              >
                <tool.icon className="h-5 w-5" />
              </button>
            ))}

            <div className="h-6 border-r border-gray-300 mx-2"></div>

            <button
              className={`p-2 rounded-md mr-1 ${
                showGrid ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
              }`}
              title="Toggle Grid"
              onClick={() => setShowGrid(!showGrid)}
            >
              <Layers className="h-5 w-5" />
            </button>

            <button
              className="p-2 rounded-md mr-1 text-gray-600 hover:bg-gray-100"
              title="Clear Canvas"
              onClick={clearCanvas}
            >
              <Trash2 className="h-5 w-5" />
            </button>

            {/* Image navigation controls - only show if there are images */}
            {uploadedImages.length > 0 && (
              <>
                <div className="h-6 border-r border-gray-300 mx-2"></div>

                <button
                  className="p-2 rounded-md mr-1 text-gray-600 hover:bg-gray-100"
                  title="Previous Image"
                  onClick={goToPreviousImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="text-sm text-gray-600 mx-1">
                  {uploadedImages.length > 0 ? `${activeImageIndex + 1}/${uploadedImages.length}` : "0/0"}
                </div>

                <button
                  className="p-2 rounded-md mr-1 text-gray-600 hover:bg-gray-100"
                  title="Next Image"
                  onClick={goToNextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <button
                  className={`p-2 rounded-md mr-1 ${
                    showImageGallery ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                  title={showImageGallery ? "Hide Image Gallery" : "Show Image Gallery"}
                  onClick={() => setShowImageGallery(!showImageGallery)}
                >
                  {showImageGallery ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
                </button>
              </>
            )}

            {/* Display uploaded images count */}
            {uploadedImages.length > 0 && (
              <div className="ml-auto flex items-center text-sm text-gray-600">
                <ImageIcon className="h-4 w-4 mr-1" />
                <span>
                  {uploadedImages.length} image{uploadedImages.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>

          {/* Image Gallery */}
          {showImageGallery && uploadedImages.length > 0 && (
            <div className="bg-white border-b border-gray-200 p-2 overflow-x-auto">
              <div className="flex space-x-2">
                {uploadedImages.map((image, index) => (
                  <div
                    key={image.id}
                    className={`relative group cursor-pointer ${
                      index === activeImageIndex ? "ring-2 ring-blue-500" : ""
                    }`}
                    onClick={() => selectImage(index)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.name}
                      className={`h-16 w-auto object-contain ${!imageVisibility[image.id] ? "opacity-40" : ""}`}
                    />
                    <button
                      className="absolute top-1 right-1 bg-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      title={imageVisibility[image.id] ? "Hide Image" : "Show Image"}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleImageVisibility(image.id)
                      }}
                    >
                      {imageVisibility[image.id] ? (
                        <EyeOff className="h-3 w-3 text-gray-600" />
                      ) : (
                        <Eye className="h-3 w-3 text-gray-600" />
                      )}
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-0.5 truncate">
                      {index + 1}. {image.name.length > 15 ? image.name.substring(0, 15) + "..." : image.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Canvas */}
          <div className="flex-1 overflow-hidden relative bg-gray-50">
            <Stage
              ref={stageRef}
              width={window.innerWidth}
              height={window.innerHeight}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={handleCanvasClick}
              onWheel={handleWheel}
              scaleX={stageScale}
              scaleY={stageScale}
              x={stagePosition.x}
              y={stagePosition.y}
              draggable={activeTool === "pan"}
            >
              <Layer>
                {/* Draw grid */}
                {showGrid &&
                  Array.from({ length: Math.ceil(window.innerWidth / 20) }).map((_, i) => (
                    <Line
                      key={`v-${i}`}
                      points={[i * 20, 0, i * 20, window.innerHeight]}
                      stroke="#e0e0e0"
                      strokeWidth={1}
                    />
                  ))}
                {showGrid &&
                  Array.from({ length: Math.ceil(window.innerHeight / 20) }).map((_, i) => (
                    <Line
                      key={`h-${i}`}
                      points={[0, i * 20, window.innerWidth, i * 20]}
                      stroke="#e0e0e0"
                      strokeWidth={1}
                    />
                  ))}

                {/* Render shapes - only show the active image */}
                {getShapesToRender().map((shape) => {
                  const isSelected = selectedShapeId === shape.id
                  const commonProps = {
                    key: shape.id,
                    id: shape.id,
                    onClick: () => setSelectedShapeId(shape.id),
                    draggable: true,
                    onDragEnd: (e) => {
                      // Update shape position when dragged
                      const updatedShapes = shapes.map((s) => {
                        if (s.id === shape.id) {
                          return {
                            ...s,
                            x: e.target.x(),
                            y: e.target.y(),
                          }
                        }
                        return s
                      })
                      setShapes(updatedShapes)
                    },
                    // Add selection styling
                    stroke: isSelected ? "#0096FF" : shape.stroke,
                    strokeWidth: isSelected ? (shape.strokeWidth || 1) + 2 : shape.strokeWidth,
                  }

                  if (shape.type === "line") {
                    return (
                      <Line
                        {...commonProps}
                        points={shape.points}
                        stroke={shape.stroke}
                        strokeWidth={shape.strokeWidth}
                      />
                    )
                  } else if (shape.type === "rect") {
                    return (
                      <Rect
                        {...commonProps}
                        x={shape.x}
                        y={shape.y}
                        width={shape.width}
                        height={shape.height}
                        fill={shape.fill}
                      />
                    )
                  } else if (shape.type === "circle") {
                    return <Circle {...commonProps} x={shape.x} y={shape.y} radius={shape.radius} fill={shape.fill} />
                  } else if (shape.type === "text") {
                    return (
                      <Text
                        {...commonProps}
                        x={shape.x}
                        y={shape.y}
                        text={shape.text}
                        fontSize={shape.fontSize}
                        fill={shape.fill}
                      />
                    )
                  } else if (shape.type === "image") {
                    // Create image element for Konva
                    const imageElement = new window.Image()
                    imageElement.src = shape.src
                    imageElement.crossOrigin = "anonymous"

                    // When image loads, store it in state
                    if (!imagesLoaded[shape.id]) {
                      imageElement.onload = () => {
                        handleImageLoad(shape.id, imageElement)
                      }
                    }

                    return (
                      <KonvaImage
                        {...commonProps}
                        x={shape.x}
                        y={shape.y}
                        width={shape.width}
                        height={shape.height}
                        image={imagesLoaded[shape.id] || null}
                        opacity={isSelected ? 0.8 : 1}
                      />
                    )
                  }
                  return null
                })}

                {/* Render temporary shape while drawing */}
                {tempShape?.type === "line" && (
                  <Line points={tempShape.points} stroke={tempShape.stroke} strokeWidth={tempShape.strokeWidth} />
                )}
                {tempShape?.type === "rect" && (
                  <Rect
                    x={tempShape.x}
                    y={tempShape.y}
                    width={tempShape.width}
                    height={tempShape.height}
                    fill={tempShape.fill}
                    stroke={tempShape.stroke}
                    strokeWidth={tempShape.strokeWidth}
                  />
                )}
                {tempShape?.type === "circle" && (
                  <Circle
                    x={tempShape.x}
                    y={tempShape.y}
                    radius={tempShape.radius}
                    fill={tempShape.fill}
                    stroke={tempShape.stroke}
                    strokeWidth={tempShape.strokeWidth}
                  />
                )}
              </Layer>
            </Stage>

            {/* Image name overlay */}
            {uploadedImages.length > 0 && getActiveImage() && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md text-sm">
                {uploadedImages[activeImageIndex].name}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CanvasArea
