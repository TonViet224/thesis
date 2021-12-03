import { Html } from '@react-three/drei'
import './css/Annotation.module.css'
const Annotation = ({ pos, content }) => {
    return (
        <Html distanceFactor={20} position={pos} >
            <div className="content">
                <p>{content}</p>
            </div>
        </Html>
    )
}

export default Annotation
