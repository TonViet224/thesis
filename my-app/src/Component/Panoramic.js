import { Suspense, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload, Html } from "@react-three/drei"
import * as THREE from 'three'

const store = [
    { name: 'corner 1', position: [15, -5, 1], url: './img360/panorama_1.png', link: 1 },
    { name: 'corner 2', position: [-15, -5, 1], url: './img360/panorama_2.png', link: 0 }
]
const Dome = ({ name, position, texture, onClick }) => {
    /*const texture = useLoader(THREE.TextureLoader, './img360/panorama_2.png')*/
    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <mesh position={position}>
                <sphereGeometry args={[0.75, 12, 12]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <button onClick={onClick}>go to new corner</button>
                </Html>
            </mesh>
        </group>

    )
}

function Portals() {
    const [which, set] = useState(0)
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore
    return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}

const Panoramic = () => {
    return (
        /*<iframe width="1000px" height="1000px" allowfullscreen frameborder="0" src="https://orbix360.com/t/IEhiElpd3uX6ASwW02SKch4bhu23/5992146897207296/demo?embed=yes"></iframe>*/
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


