import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model3D from "../common/Model3D";

export default function Landing() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Model3D />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
