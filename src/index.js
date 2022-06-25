import React from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Star } from "react-konva";

const App = () => {
  const handelClickLayer = (e) => {
    // const shape = e.target;
    alert('you clicked on "' + e.target.name() + '"');
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer onClick={handelClickLayer}>
        <Star
          x={350}
          y={150}
          numPoints={15}
          innerRadius={40}
          outerRadius={70}
          fill={"blue"}
          scale={{ x: 2, y: 0.5 }}
          name={"star"}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
