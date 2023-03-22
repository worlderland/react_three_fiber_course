import { Stats, OrbitControls, Environment } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useControls } from 'leva'

function Env() {
  const { height, radius, scale } = useControls('Ground', {
    height: { value: 10, min: 0, max: 100, step: 1 },
    radius: { value: 115, min: 0, max: 1000, step: 1 },
    scale: { value: 100, min: 0, max: 1000, step: 1 }
  })
  return (
    <Environment
      files="./images/rustig_koppie_puresky_1k.hdr"
      background
      ground={{
        height: height,
        radius: radius,
        scale: scale
      }}
    />
  )
}

export default function App() {
  const model = useLoader(GLTFLoader, './models/scene.glb')
  //   const pipe = useLoader(GLTFLoader, './models/pipe/modular_industrial_pipes_01_1k.gltf')
  console.log(model)
  //   console.log(pipe)

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <Env />
      {/* <Environment files='./images/syferfontein_1d_clear_puresky_1k.hdr' background /> */}
      <primitive object={model.scene} children-0-castShadow />
      {/* <primitive
        object={pipe.scene}
        position={[0, 3, 0]}
        children-0-castShadow
      /> */}
      {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
        <meshStandardMaterial />
      </Circle> */}
      <OrbitControls target={[0, 1, 0]} />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  )
}
