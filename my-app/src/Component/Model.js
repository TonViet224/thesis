import React, { Suspense, useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Annotation from './Annotation'

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
            <Annotation pos={[0, -1, 0]} content={'hello world 1'} anoNum={'1'} />
            <Annotation pos={[-1, 7, -1]} content={'hello world 2'} anoNum={'2'} />
            <Annotation pos={[4, 4, 4]} content={'hello world 3'} anoNum={'3'} />
        </>
    )
}

export default Model
