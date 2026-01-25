// react three fiber tools, that help loading the model and its animation in gltf format
import { useGLTF, useAnimations, Center } from "@react-three/drei"; 
// The model itself has 4 components (char, chair, text and rig/animation), Group lib groups it togheter
import { Group } from "three";
import { useRef, useEffect } from "react";

export default function Model3D() {
  const group = useRef<Group>(null!); // "null!" is needed for typescript, because it will be asigned bellow
  const { scene, animations } = useGLTF("/models/landingModelSittingIdle.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.keys(actions)[0];
    actions[first]?.play();
  }, [actions]);

  return (
    <Center>
      <primitive ref={group} object={scene} scale={1.8} position={[0, 0, 0]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}> // oval effect under the model "shadow"
        <circleGeometry args={[1.8, 64]} />
        <meshBasicMaterial color="#63233d83" transparent opacity={0.15} />
      </mesh>
    </Center>
  );
}

useGLTF.preload("/models/landingModelSittingIdle.glb"); // prelaods the model before its even used for performance
