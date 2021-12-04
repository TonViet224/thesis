import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Html } from '@react-three/drei'
import style from './css/Annotation.module.css'

const Annotation = ({ pos, content, anoNum }) => {
    const ref = useRef()
    const [hidden, setVisible] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    useEffect(() => {
        const checkClickedOutSide = e => {
            if (isClicked && ref.current && !ref.current.contains(e.target)) {
                setIsClicked(false)
            }

        }
        document.addEventListener("mousedown", checkClickedOutSide)
        return () => {
            document.removeEventListener("mousedown", checkClickedOutSide)
        }
    }, [isClicked])
    return (
        <Html
            distanceFactor={20}
            position={pos}
            style={{ transition: 'all 0.2s', opacity: hidden ? 0.5 : 1 }}
            center
            sprite
            occlude
            onOcclude={setVisible}>
            <div ref={ref} className={style.annotationMarker} onClick={() => setIsClicked(!isClicked)}>
                {anoNum}
            </div>
            {isClicked && (<div className={style.content}>
                {content}
            </div>)}
        </Html>
    )
}

export default Annotation
