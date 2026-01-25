import { useGLTF, useAnimations } from '@react-three/drei'
import { Group } from 'three'
import { useRef, useEffect } from 'react'

export default function Model3D() {
  const group = useRef<Group>(null!)

  const { scene, animations } = useGLTF('/models/landingModelSittingIdle.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const first = Object.keys(actions)[0]
    actions[first]?.play()
  }, [actions])

  return <primitive ref={group} object={scene} />
}

useGLTF.preload('/models/landingModel.glb')