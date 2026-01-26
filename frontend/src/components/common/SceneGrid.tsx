import { Grid} from "@react-three/drei"; // Grid lib to create the floor effect

export default function SceneGrid() {
  return (
    <>
      // Floor grid
      <Grid
        position={[0, -0.7, 0]}
        args={[50, 50]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#ffffff"
        sectionSize={0}
        fadeDistance={8}
        fadeStrength={2}
        infiniteGrid
      />
    </>
  );
}
