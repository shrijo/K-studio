import { MeshStandardMaterial } from "three";

interface BoxProps {
  color: string;
}

const Floor = (props: BoxProps) => {
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[100, 100, 100]}
      castShadow
      receiveShadow
    >
      <planeGeometry />
      <meshStandardMaterial
        color={props.color}
        transparent={true}
        opacity={0.1}
      />
    </mesh>
  );
};

export default Floor;
