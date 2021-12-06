import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import style from './css/Annotation.module.css'
import * as THREE from 'three'


/**
 * Annotation
 * @param {*} param0 
 * @returns 
 */
const Annotation = ({ pos, content, anoNum }) => {
    /*const [vec, setVec] = useState(new THREE.Vector3(0, 15, 30))*/

    const ref = useRef()
    const [hidden, setVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    const AnnoZoom = (pos) => {
        setIsClicked(!isClicked)
        /*const anno_vec = new THREE.Vector3(pos[0], pos[1], pos[2])
        setVec(anno_vec)*/
    }

    useEffect(() => {
        const checkClickedOutSide = e => {
            if (isClicked && ref.current && !ref.current.contains(e.target)) {
                setIsClicked(false)
                /*setVec(new THREE.Vector3(0, 15, 30))*/
            }

        }
        document.addEventListener("mousedown", checkClickedOutSide)
        return () => {
            document.removeEventListener("mousedown", checkClickedOutSide)
        }
    }, [isClicked])

    /*useFrame(({ camera }) => {
        camera.position.lerp(vec, 0.1)
    })*/

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
