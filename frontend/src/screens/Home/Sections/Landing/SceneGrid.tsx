import { Grid } from "@react-three/drei"; // Grid lib to create the floor effect

export function SceneGridGround() {
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

export function SceneGridWall() {
  return (
    <>
      // Wall grid
      <Grid
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[50, 50]}
        cellSize={4.1} // TODO maybe there is a better way to do this? (Probably is) 
        cellThickness={0.6}
        cellColor="#ffffff"
        sectionSize={0}
        fadeDistance={12}
        fadeStrength={1}
        infiniteGrid
      />
    </>
  );
}
