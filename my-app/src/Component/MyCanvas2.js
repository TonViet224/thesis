import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import Model from './Model'
import Button from './Button'

/**
 * keylight
 * @param {*} param0 
 * @returns 
 */
const KeyLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={3}
            height={3}
            color={color}
            intensity={brightness}
            position={[-20, 0, 50]}
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
        />
    );
}

/**
 * Fill Light
 * @param {*} param0 
 * @returns 
 */
const FillLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={3}
            height={3}
            intensity={brightness}
            color={color}
            position={[20, 10, 40]}
            lookAt={[0, 0, 0]}
            penumbra={2}
            castShadow
        />
    );
}

/**
 * Rim Light
 * @param {*} param0 
 * @returns 
 */
const RimLight = ({ brightness, color }) => {
    return (
        <rectAreaLight
            width={2}
            height={2}
            intensity={brightness}
            color={color}
            position={[10, 40, -20]}
            rotation={[0, 180, 0]}
            castShadow
        />
    );
}

/**
 * 
 * @returns the canvas display 3d scene
 */
const MyCanvas2 = () => {
    const [light, setLight] = useState(true)
    const [preset, setPreset] = useState('sunset')
    const [ani, setAni] = useState(true)
    const lightChange = () => {
        setLight(!light)
    }

    const changePreset = (newPreset) => {
        setPreset(newPreset)
    }

    const toggleAni = () => {
        setAni(!ani)
    }
    return (
        <div className="canvas3d">
            <Canvas camera={{ position: [10, 10, 10] }}>
                <Suspense fallback={null}>
                    <primitive object={new THREE.AxesHelper(10)} />
                    <KeyLight brightness={50.6} color={"#ffc9f9"} />
                    <FillLight brightness={20.6} color={"#bdefff"} />
                    <RimLight brightness={540} color={"#fff"} />
                    <Model url3d={'./models/leather_shoes/scene.gltf'} scale={0.05} />
                    <OrbitControls autoRotate={ani} autoRotateSpeed={3.0} />
                    {light ? (<Environment preset={preset} background />) : (<></>)}
                </Suspense>
            </Canvas>
            <div className="btn-holder">
                <Button text={light ? 'light on' : 'light off'} onClick={lightChange} />
                <Button text={'Sunset'} onClick={() => changePreset('sunset')} />
                <Button text={'Ware House'} onClick={() => changePreset('warehouse')} />
                <Button text={ani ? 'stop spin' : 'spin'} onClick={toggleAni} />
            </div>
        </div>
    )
}

export default MyCanvas2
