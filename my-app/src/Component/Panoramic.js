import { Suspense, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload, Html } from "@react-three/drei"
import * as THREE from 'three'

const store = [
    {
        name: 'corner rb',
        position_0: [-15, -5, 1],
        position_1: [-15, 5, 1],
        position_2: [15, -5, 1],
        url: './img360/panorama_1.png',
        link: [1, 2, 3]
    },
    {
        name: 'corner rt',
        position_0: [-15, -5, 1],
        position_1: [-15, 5, 1],
        position_2: [15, -5, 1],
        url: './img360/panorama_2.png',
        link: [0, 2, 3]
    },
    {
        name: 'corner lt',
        position_0: [-15, -5, 1],
        position_1: [-15, 5, 1],
        position_2: [15, -5, 1],
        url: './img360/panorama_3.png',
        link: [0, 1, 3]
    },
    {
        name: 'corner lb',
        position_0: [-15, -5, 1],
        position_1: [-15, 5, 1],
        position_2: [15, -5, 1],
        url: './img360/panorama_4.png',
        link: [0, 1, 2]
    }
]
const Dome = (props) => {

    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={props.texture} side={THREE.BackSide} />
            </mesh>
            <mesh position={props.position_0}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={props.g0}>go to new 0</button>
                </Html>
            </mesh>
            <mesh position={props.position_1}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={props.g1} >go to new 1</button>
                </Html>
            </mesh>
            <mesh position={props.position_2}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={props.g2}>go to new 2</button>
                </Html>
            </mesh>
        </group>
    )
}
function Portals() {
    const [which, set] = useState(0)
    const { ...props } = store[which]
    const goto_0 = () => set(props.link[0])
    const goto_1 = () => set(props.link[1])
    const goto_2 = () => set(props.link[2])
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome g0={goto_0} g1={goto_1} g2={goto_2} {...props} texture={maps[which]} />
}
const Panoramic = () => {
    return (
        <div className='canvas3d'>
            <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
                <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
                <Suspense fallback={null}>
                    <Preload all />
                    <Portals />
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Panoramic


