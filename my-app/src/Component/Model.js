import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'

const Model = ({ onAni, url3d }) => {
    const gltf = useLoader(GLTFLoader, url3d)
    const ref = useRef()
    useFrame(() => {
        if (onAni) {
            ref.current.rotation.y += 0.01
        }
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
