import { Suspense, useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
import * as THREE from 'three'

const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, './img360/pic1.jpg')
    return (
        <mesh>
            <sphereBufferGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>
    )
}

const Panoramic = () => {
    return (
        /*<iframe width="1000px" height="1000px" allowfullscreen frameborder="0" src="https://orbix360.com/t/IEhiElpd3uX6ASwW02SKch4bhu23/5992146897207296/demo?embed=yes"></iframe>*/
        <div className='canvas3d'>
            <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
                <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
                <Suspense fallback={null}>
                    <Dome/>
                    <Preload all/>
                </Suspense>
            </Canvas>
        </div>
    )
}
export default Panoramic


