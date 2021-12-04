import React, { Suspense, useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import style from './css/Annotation.module.css'
/*<p>{content}</p>*/
const Annotation = ({ pos, content }) => {
    const [hidden, setVisible] = useState(false)
    return (
        <Html
            distanceFactor={20}
            position={pos}
            style={{ transition: 'all 0.2s', opacity: hidden ? 0.5 : 1 }}
            center
            sprite
            occlude
            onOcclude={setVisible}>
            <div className={style.annotationMarker}>
                1
            </div>
        </Html>
    )
}

export default Annotation
