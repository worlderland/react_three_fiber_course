import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
  const ref = useRef()

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        console.log(ref.current)
      }}
      onPointerUp={() => {
        console.log(ref.current)
      }}
      onPointerOver={() => {
        console.log(ref.current)
      }}
      onPointerOut={() => {
        console.log(ref.current)
      }}
      onUpdate={(self) => {
        console.log(self)
      }}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  )
}
