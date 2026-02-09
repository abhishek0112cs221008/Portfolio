import { Box } from '@react-three/drei';

const OutdoorEnvironment = () => {
    return (
        <group>
            {/* Large Ground Plane - Grass */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#7cb342" />
            </mesh>

            {/* Pathway to house */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 10]} receiveShadow>
                <planeGeometry args={[3, 20]} />
                <meshStandardMaterial color="#9e9e9e" />
            </mesh>

            {/* Sky Box (distant mountains/hills effect) */}
            <Box args={[1, 8, 100]} position={[-50, 4, 0]}>
                <meshStandardMaterial color="#4a7c59" />
            </Box>
            <Box args={[1, 8, 100]} position={[50, 4, 0]}>
                <meshStandardMaterial color="#4a7c59" />
            </Box>
            <Box args={[100, 8, 1]} position={[0, 4, -50]}>
                <meshStandardMaterial color="#4a7c59" />
            </Box>

            {/* Clouds (simple spheres) */}
            <mesh position={[-20, 15, -20]}>
                <sphereGeometry args={[3, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>
            <mesh position={[25, 18, -30]}>
                <sphereGeometry args={[4, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>
            <mesh position={[15, 16, 25]}>
                <sphereGeometry args={[3.5, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>

            {/* Garden Bushes */}
            {[
                [-8, 0.5, 6],
                [8, 0.5, 6],
                [-8, 0.5, -6],
                [8, 0.5, -6],
                [-6, 0.5, 8],
                [6, 0.5, 8],
            ].map((pos, i) => (
                <mesh key={`bush-${i}`} position={pos as [number, number, number]}>
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshStandardMaterial color="#2e7d32" />
                </mesh>
            ))}

            {/* Flower patches */}
            {[
                [-7, 0.2, 7],
                [7, 0.2, 7],
                [-7, 0.2, -7],
                [7, 0.2, -7],
            ].map((pos, i) => (
                <group key={`flower-${i}`} position={pos as [number, number, number]}>
                    <mesh position={[0, 0, 0]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color="#ff1744" emissive="#ff1744" emissiveIntensity={0.3} />
                    </mesh>
                    <mesh position={[0.2, 0, 0.1]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color="#ffeb3b" emissive="#ffeb3b" emissiveIntensity={0.3} />
                    </mesh>
                    <mesh position={[-0.1, 0, 0.2]}>
                        <sphereGeometry args={[0.1, 8, 8]} />
                        <meshStandardMaterial color="#e91e63" emissive="#e91e63" emissiveIntensity={0.3} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

export default OutdoorEnvironment;
