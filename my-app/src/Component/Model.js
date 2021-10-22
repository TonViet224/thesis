import React, { Suspense, useRef } from 'react'
import { useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
const Model = () => {
    const gltf = useLoader(GLTFLoader, './models/leather_shoes/scene.gltf')
    const ref = useRef()
    useFrame(() => {
        ref.current.rotation.y += 0.01
    })
    return (
        <>
            <mesh ref={ref}>
                <primitive position={[0, 0, 0]} object={gltf.scene} scale={0.4} />
            </mesh>
            <Html distanceFactor={10}>
                <div class="content">
                    hello <br />
                    world
                </div>
            </Html>
        </>
    )
}

export default Model
