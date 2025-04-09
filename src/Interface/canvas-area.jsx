import { useState } from "react";
import { Stage, Layer, Line, Circle, Rect, Text } from "react-konva";
import {
  MousePointer,
  Ruler,
  Square,
  Circle as CircleIcon,
  Pencil,
  Type,
  Move,
  Layers,
  Trash2,
} from "lucide-react";

const CanvasArea = ({ onElementSelect }) => {
  const [activeTool, setActiveTool] = useState("select");
  const [showGrid, setShowGrid] = useState(true); // Controls grid visibility
  const [shapes, setShapes] = useState([]); // Store all drawn shapes
  const [isDrawing, setIsDrawing] = useState(false); // Track if the user is drawing
  const [tempShape, setTempShape] = useState(null); // Temporary shape while drawing

  const tools = [
    { id: "select", icon: MousePointer, label: "Select" },
    { id: "measure", icon: Ruler, label: "Measure" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: CircleIcon, label: "Circle" },
    { id: "draw", icon: Pencil, label: "Draw" },
    { id: "text", icon: Type, label: "Text" },
    { id: "pan", icon: Move, label: "Pan" },
  ];

  // Simulate selecting an element
  const handleCanvasClick = (e) => {
    if (activeTool === "select") {
      const mockElement = {
        id: Math.floor(Math.random() * 1000),
        type: "Wall",
        length: 120,
        area: 480,
        material: "Concrete",
        color: "#3B82F6",
        notes: "",
      };
      onElementSelect(mockElement);
    }
  };

  // Handle mouse down event
  const handleMouseDown = (e) => {
    const pos = e.target.getStage().getPointerPosition();
    setIsDrawing(true);

    if (activeTool === "draw") {
      setTempShape({
        type: "line",
        points: [pos.x, pos.y],
        stroke: "#3B82F6",
        strokeWidth: 2,
      });
    } else if (activeTool === "rectangle") {
      setTempShape({
        type: "rect",
        x: pos.x,
        y: pos.y,
        width: 0,
        height: 0,
        fill: "#4CAF50",
        stroke: "#000",
        strokeWidth: 2,
      });
    } else if (activeTool === "circle") {
      setTempShape({
        type: "circle",
        x: pos.x,
        y: pos.y,
        radius: 0,
        fill: "#FF6347",
        stroke: "#000",
        strokeWidth: 2,
      });
    } else if (activeTool === "text") {
      setShapes((prevShapes) => [
        ...prevShapes,
        {
          type: "text",
          x: pos.x,
          y: pos.y,
          text: "Hello",
          fontSize: 20,
          fill: "#000",
        },
      ]);
    }
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDrawing || !tempShape) return;

    const pos = e.target.getStage().getPointerPosition();

    if (activeTool === "draw") {
      setTempShape((prevShape) => ({
        ...prevShape,
        points: [...prevShape.points, pos.x, pos.y],
      }));
    } else if (activeTool === "rectangle") {
      setTempShape((prevShape) => ({
        ...prevShape,
        width: pos.x - prevShape.x,
        height: pos.y - prevShape.y,
      }));
    } else if (activeTool === "circle") {
      const dx = pos.x - tempShape.x;
      const dy = pos.y - tempShape.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      setTempShape((prevShape) => ({
        ...prevShape,
        radius,
      }));
    }
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    if (isDrawing && tempShape) {
      setShapes((prevShapes) => [...prevShapes, tempShape]);
      setTempShape(null);
    }
    setIsDrawing(false);
  };

  return (
    <div className="h-full flex flex-col">
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
          onClick={() => setShowGrid(!showGrid)} // Toggle grid visibility
        >
          <Layers className="h-5 w-5" />
        </button>

        <button className="p-2 rounded-md mr-1 text-gray-600 hover:bg-gray-100" title="Clear Canvas">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-auto relative bg-gray-50">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleCanvasClick}
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

            {/* Render saved shapes */}
            {shapes.map((shape, index) => {
              if (shape.type === "line") {
                return (
                  <Line
                    key={index}
                    points={shape.points}
                    stroke={shape.stroke}
                    strokeWidth={shape.strokeWidth}
                  />
                );
              } else if (shape.type === "rect") {
                return (
                  <Rect
                    key={index}
                    x={shape.x}
                    y={shape.y}
                    width={shape.width}
                    height={shape.height}
                    fill={shape.fill}
                    stroke={shape.stroke}
                    strokeWidth={shape.strokeWidth}
                    draggable
                  />
                );
              } else if (shape.type === "circle") {
                return (
                  <Circle
                    key={index}
                    x={shape.x}
                    y={shape.y}
                    radius={shape.radius}
                    fill={shape.fill}
                    stroke={shape.stroke}
                    strokeWidth={shape.strokeWidth}
                    draggable
                  />
                );
              } else if (shape.type === "text") {
                return (
                  <Text
                    key={index}
                    x={shape.x}
                    y={shape.y}
                    text={shape.text}
                    fontSize={shape.fontSize}
                    fill={shape.fill}
                    draggable
                  />
                );
              }
              return null;
            })}

            {/* Render temporary shape while drawing */}
            {tempShape?.type === "line" && (
              <Line
                points={tempShape.points}
                stroke={tempShape.stroke}
                strokeWidth={tempShape.strokeWidth}
              />
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
      </div>
    </div>
  );
};

export default CanvasArea;