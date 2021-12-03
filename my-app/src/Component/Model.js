import React, { Suspense, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import Annotation from './Annotation'
/*<Html distanceFactor={10} position={[0, -0.1, 0]}>
                <div class="content">
                    hello <br />
                    world 1
                </div>
            </Html>
            <Html distanceFactor={10} position={[0, 5, 0]}>
                <div class="content">
                    hello <br />
                    world 2
                </div>
            </Html>
            <Html distanceFactor={10} position={[2, 0, 0]}>
                <div class="content">
                    hello <br />
                    world 3
                </div>
            </Html> */
const Model = ({ onAni, url3d, scale }) => {
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
                <primitive position={[0, 0, 0]} object={gltf.scene} scale={scale} />
            </mesh>
            <Annotation pos={[0, -0.1, -2]} content={'hello world 1'} />
            <Annotation pos={[0, 7, -1]} content={'hello world 2'} />
            <Annotation pos={[4, 4, 4]} content={'hello world 3'} />
        </>
    )
}

export default Model
