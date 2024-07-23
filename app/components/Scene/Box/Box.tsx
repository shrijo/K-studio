import { useState } from "react";
import { useAppContext } from "../../../context";

interface BoxProps {
  color: string;
  position: [number, number, number];
  size: [number, number, number];
}

const Box = (props: BoxProps) => {
  const [hovered, hover] = useState(false);
  const { boxAttributes, setBoxAttributes } = useAppContext();

  return (
    <mesh
      position={[
        props.position[0],
        props.position[1] + boxAttributes.size / 2,
        props.position[2],
      ]}
      castShadow
      receiveShadow
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry
        args={[boxAttributes.size, boxAttributes.size, boxAttributes.size]}
      />
      <meshStandardMaterial
        color={hovered ? "#00ff00" : props.color}
        roughness={0.15}
        metalness={0.5}
      />
    </mesh>
  );
};

export default Box;
