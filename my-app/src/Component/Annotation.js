import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import style from './css/Annotation.module.css'
import * as THREE from 'three'

// initial camera position
const cameraTarget = new THREE.Vector3(0, 15, 30)

/**
 * return new camera distance
 * @param {*} pos 
 * @param {*} dis 
 * @returns 
 */
const zoompos = (pos, dis) => {
    const a = pos;
    const da = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2))
    const k = (da + dis) / da
    return [a[0] * k, a[1] * k, a[2] * k]
}

/**
 * Annotation
 * @param {*} param0 
 * @returns 
 */
const Annotation = ({ pos, content, anoNum }) => {
    const ref = useRef()
    const [hidden, setVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const AnnoZoom = (pos) => {
        setIsClicked(true)
        const c = zoompos(pos, 10)
        cameraTarget.set(c[0], c[1], c[2])
    }

    useEffect(() => {
        const checkClickedOutSide = e => {
            if (isClicked && ref.current && !ref.current.contains(e.target)) {
                setIsClicked(false)
                /*cameraTarget.set(0, 15, 30)*/
            }

        }
        document.addEventListener("mousedown", checkClickedOutSide)
        return () => {
            document.removeEventListener("mousedown", checkClickedOutSide)
        }
    }, [isClicked])

    useFrame(({ camera }) => {
        if (isClicked) {
            camera.position.lerp(cameraTarget, 0.1)
        }
    })
    return (
        <Html
            distanceFactor={20}
            position={pos}
            style={{ transition: 'all 0.2s', opacity: hidden ? 0.5 : 1 }}
            center
            sprite
            occlude
            onOcclude={setVisible}>
            <div ref={ref} className={style.annotationMarker} onClick={() => AnnoZoom(pos)}>
                {anoNum}
            </div>
            {isClicked && (<div className={style.content}>
                {content}
            </div>)}
        </Html>
    )
}

export default Annotation
