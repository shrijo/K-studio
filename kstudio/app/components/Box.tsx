interface BoxProps {
    color: string;
    position: [number, number, number];
    size: [number, number, number];
}

const Box = (props: BoxProps) => {
    return (
      <mesh position={props.position}>
          <boxGeometry args={props.size} />
          <meshStandardMaterial color={props.color} />
      </mesh>
    );
  };

  export default Box;