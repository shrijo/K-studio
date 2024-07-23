import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Box from "./Box/Box";
import Controlls from "../Controlls/Controlls";
import Floor from "./Floor/Floor";

const Scene = () => {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (value: number) => {
    setRangeValue(value);
  };
  return (
    <div className="full-screen-canvas">
      <Controlls
        onRangeChange={(value: string) => handleRangeChange(Number(value))}
      />
      <Canvas shadows="soft" camera={{ position: [0, 10, 10], fov: 50 }}>
        <directionalLight
          position={[10, 10, 15]}
          castShadow
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <ambientLight intensity={0.5} />
        <Stage
          scale={[100, 100, 100]}
          preset="soft"
          adjustCamera={false}
          shadows="contact"
        >
          <Box
            color="pink"
            position={[0, 0, 0]}
            size={[rangeValue, rangeValue, rangeValue]}
          />
        </Stage>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
