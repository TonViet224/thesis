import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import Model from './Model'

const MyCanvas2 = () => {
    
    return (
        <div className="canvas3d">
            <Canvas>
                <Suspense fallback={null}>
                    <Model/>
                    <OrbitControls />
                    <Environment preset='sunset' background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default MyCanvas2
