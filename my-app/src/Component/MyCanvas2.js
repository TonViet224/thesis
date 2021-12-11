import { Environment, OrbitControls, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import Model from './Model'
import Button from './Button'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

/**
 * keylight
 * @param {*} param0 
 * @returns 
 */
const KeyLight = ({ brightness, color }) => {
    const keylight = useRef()
    useHelper(keylight, RectAreaLightHelper, 'cyan')
    return (
        <rectAreaLight
            width={3}
            height={3}
            color={color}
            intensity={brightness}
            position={[0, 0, 20]}
            lookAt={[0, 0, 0]}
            penumbra={1}
            castShadow
            ref={keylight}
        />
    );
}

/**
 * Fill Light
 * @param {*} param0 
 * @returns 
 */
const FillLight = ({ brightness, color }) => {
    const filllight = useRef()
    useHelper(filllight, RectAreaLightHelper, 'red')
    return (
        <rectAreaLight
            width={3}
            height={3}
            intensity={brightness}
            color={color}
            position={[2, 1, -15]}
            rotation={[0, 3.1, 0]}
            penumbra={2}
            castShadow
            ref={filllight}
        />
    );
}

/**
 * Rim Light
 * @param {*} param0 
 * @returns 
 */
const RimLight = ({ brightness, color }) => {
    const rimlight = useRef()
    useHelper(rimlight, RectAreaLightHelper, 'pink')
    return (
        <rectAreaLight
            width={30}
            height={30}
            intensity={brightness}
            color={color}
            position={[25, 0, 0]}
            rotation={[0, 1.5, 0]}
            castShadow
            ref={rimlight}
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
                    {light ? (<KeyLight brightness={500} color={"#ffc9f9"} />) : (<></>)}
                    {light ? (<FillLight brightness={150} color={"#bdefff"} />) : (<></>)}
                    {light ? (<RimLight brightness={5} color={"#fff"} />) : (<></>)}
                    <Model url3d={'./models/leather_shoes/scene.gltf'} scale={0.05} onClick={() => setAni(false)} />
                    <OrbitControls autoRotate={ani} autoRotateSpeed={2.0} />
                    <Environment preset={preset} background />
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
