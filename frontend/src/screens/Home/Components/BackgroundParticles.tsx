import { Sparkles } from '@react-three/drei' // react three fiber tool for particles

export default function BackgroundParticles() {
  return (
    <Sparkles
      count={120}
      speed={0.2}
      size={1.5}
      color="#ffffff"
      opacity={0.4}
      scale={[10, 3, 10]}
      position={[0, -1, 0]}
    />
  )
}