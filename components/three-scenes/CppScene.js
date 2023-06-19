import { Canvas } from "@react-three/fiber"

export default function Cube() {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}