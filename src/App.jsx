import { Stats, OrbitControls, Circle, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/monkey.glb')
  console.log(gltf)

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={3} castShadow />
      <Environment files='./images/rustig_koppie_puresky_1k.hdr' background />
      {/* <Environment files='./images/syferfontein_1d_clear_puresky_1k.hdr' background /> */}
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
