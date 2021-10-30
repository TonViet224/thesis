import { Suspense, useState, useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Showroom = () => {
    const gltf = useLoader(GLTFLoader, './models/showroom/showroom.gltf')
    const ref = useRef()
    return (
        <div className="canvas3d">
            <Canvas>
                <Suspense fallback={null}>
                    <mesh ref={ref}>
                        <primitive position={[0, 0, 0]} object={gltf.scene} scale={0.4} />
                    </mesh>
                    <OrbitControls />
                    <Environment preset='sunset' background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Showroom
