import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";

interface SceneProps {
  rangeValue: number;
}

const Scene = (props: SceneProps) => {
  return (
    <div className="full-screen-canvas">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 15]} />
        <pointLight position={[10, 10, 10]} />
        <Box color="pink" position={[0, 0, 0]} size={[1, 1, 1]} />
        <Box
          color="yellow"
          position={[1, 1, 1]}
          size={[props.rangeValue, props.rangeValue, props.rangeValue]}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene;
