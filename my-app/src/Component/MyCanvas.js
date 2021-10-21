import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Box from './Box'

const MyCanvas = () => {
    const [haveLight, setHaveLight] = useState(true)
    const changeLight = () => {
        setHaveLight(!haveLight)
    }
    return (
        <>
            <Canvas>
                <Suspense>
                    {haveLight ? (
                        <>
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />)
                            < pointLight position={[-10, -10 - 10]} />
                        </>) : (<></>)}
                    < Box position={[-1.2, 0, 0]} />
                    <Box position={[2.5, 0, 0]} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </>
    )
}

export default MyCanvas
