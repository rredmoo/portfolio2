// react three fiber tools, that help loading the model and its animation in gltf format
import { useGLTF, useAnimations, Center } from "@react-three/drei"; 
// The model itself has 4 components (char, chair, text and rig/animation), Group lib groups it togheter
import { Group } from "three";
import { useRef, useEffect } from "react";

export default function Model3D() {
  const group = useRef<Group>(null!); // "null!" is needed for typescript, because it will be asigned bellow
  const { scene, animations } = useGLTF("/models/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.keys(actions)[0];
    actions[first]?.play();
  }, [actions]);

  return (
    <Center position={[0, 0, -2]}>
      <primitive ref={group} object={scene} scale={1.8} position={[0, 0.15, 0]} renderOrder={0} />
    </Center>
  );
}

useGLTF.preload("/models/model.glb"); // prelaods the model before its even used for performance
