import { Suspense, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload, Html } from "@react-three/drei"
import * as THREE from 'three'

/**
 * this store the location info of the showroom
 */
const store = [
    {
        name: 'corner rb',
        position_0: [15, -2, 1],
        position_1: [30, -3, -40],
        position_2: [-5, -3, -40],
        url: './img360/panorama_1.png',
        link: [
            { loc: 1, name: 'corner rt' },
            { loc: 2, name: 'corner lt' },
            { loc: 3, name: 'corner lb' }
        ]
    },
    {
        name: 'corner rt',
        position_0: [-15, -2, 1],
        position_1: [0, -5, -40],
        position_2: [-45, -5, -45],
        url: './img360/panorama_2.png',
        link: [
            { loc: 0, name: 'corner rb' },
            { loc: 2, name: 'corner lt' },
            { loc: 3, name: 'corner lb' }
        ]
    },
    {
        name: 'corner lt',
        position_0: [-45, -4, 45],
        position_1: [0, -4, 45],
        position_2: [-35, -1, 0],
        url: './img360/panorama_3.png',
        link: [
            { loc: 0, name: 'corner rb' },
            { loc: 1, name: 'corner rt' },
            { loc: 3, name: 'corner lb' }
        ]
    },
    {
        name: 'corner lb',
        position_0: [0, -4, 35],
        position_1: [30, -4, 35],
        position_2: [15, -1, 1],
        url: './img360/panorama_4.png',
        link: [
            { loc: 0, name: 'corner rb' },
            { loc: 1, name: 'corner rt' },
            { loc: 2, name: 'corner lt' }
        ]
    }
]

/**
 * this hold the showroom panoramic image
 * @param {*} props 
 * @returns 
 */
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
                    <button onClick={props.g0}>go to new {props.link[0].name}</button>
                </Html>
            </mesh>
            <mesh position={props.position_1}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={props.g1} >go to new {props.link[1].name}</button>
                </Html>
            </mesh>
            <mesh position={props.position_2}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={props.g2}>go to new {props.link[2].name}</button>
                </Html>
            </mesh>
        </group>
    )
}

/**
 * this allows the user to move inthe showroom
 */
function Portals() {
    const [which, set] = useState(0)
    const { ...props } = store[which]
    const goto_0 = () => set(props.link[0].loc)
    const goto_1 = () => set(props.link[1].loc)
    const goto_2 = () => set(props.link[2].loc)
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome g0={goto_0} g1={goto_1} g2={goto_2} {...props} texture={maps[which]} />
}

/**
 * this is the showroom canvas
 * @returns 
 */
const Panoramic = () => {
    return (
        <div className='canvas3d'>
            <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
                <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
                <Suspense fallback={null}>
                    <Preload all />
                    <primitive object={new THREE.AxesHelper(10)} />
                    <Portals />
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Panoramic


