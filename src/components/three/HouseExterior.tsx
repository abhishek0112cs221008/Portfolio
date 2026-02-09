import { Box, Cylinder, Sphere } from '@react-three/drei';

const HouseExterior = () => {
    return (
        <group position={[0, 0, 0]}>
            {/* Main House Structure */}
            {/* Foundation */}
            <Box args={[12, 0.5, 12]} position={[0, 0.25, 0]}>
                <meshStandardMaterial color="#8b7355" />
            </Box>

            {/* Main Walls */}
            <Box args={[12, 4, 12]} position={[0, 2.5, 0]}>
                <meshStandardMaterial color="#f5e6d3" />
            </Box>

            {/* Roof */}
            <group position={[0, 5, 0]}>
                {/* Roof pyramid */}
                <mesh rotation={[0, Math.PI / 4, 0]}>
                    <coneGeometry args={[8.5, 2, 4]} />
                    <meshStandardMaterial color="#8b4513" />
                </mesh>
            </group>

            {/* Front Door */}
            <Box args={[1.5, 2.5, 0.2]} position={[0, 1.5, 6.1]}>
                <meshStandardMaterial color="#654321" />
            </Box>

            {/* Door Handle */}
            <Sphere args={[0.08, 16, 16]} position={[0.5, 1.5, 6.2]}>
                <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
            </Sphere>

            {/* Windows - Front */}
            <Box args={[1.2, 1.5, 0.15]} position={[-3, 2.5, 6.05]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>
            <Box args={[1.2, 1.5, 0.15]} position={[3, 2.5, 6.05]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>

            {/* Windows - Left Side */}
            <Box args={[0.15, 1.5, 1.2]} position={[-6.05, 2.5, 2]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>
            <Box args={[0.15, 1.5, 1.2]} position={[-6.05, 2.5, -2]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>

            {/* Windows - Right Side */}
            <Box args={[0.15, 1.5, 1.2]} position={[6.05, 2.5, 2]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>
            <Box args={[0.15, 1.5, 1.2]} position={[6.05, 2.5, -2]} rotation={[0, 0, 0]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>

            {/* Windows - Back */}
            <Box args={[1.2, 1.5, 0.15]} position={[-3, 2.5, -6.05]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>
            <Box args={[1.2, 1.5, 0.15]} position={[3, 2.5, -6.05]}>
                <meshStandardMaterial color="#87ceeb" transparent opacity={0.7} />
            </Box>

            {/* Chimney */}
            <Box args={[0.8, 3, 0.8]} position={[4, 5.5, -3]}>
                <meshStandardMaterial color="#8b4513" />
            </Box>

            {/* Front Steps */}
            <Box args={[2, 0.2, 1]} position={[0, 0.1, 7.5]}>
                <meshStandardMaterial color="#808080" />
            </Box>
            <Box args={[2, 0.2, 1]} position={[0, 0.3, 8]}>
                <meshStandardMaterial color="#808080" />
            </Box>

            {/* Garden Fence Posts */}
            {[-8, -4, 4, 8].map((x, i) => (
                <Cylinder key={`fence-front-${i}`} args={[0.1, 0.1, 1.5]} position={[x, 0.75, 10]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
            ))}
            {[-8, -4, 4, 8].map((x, i) => (
                <Cylinder key={`fence-back-${i}`} args={[0.1, 0.1, 1.5]} position={[x, 0.75, -10]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
            ))}

            {/* Trees */}
            {/* Tree 1 - Front Left */}
            <group position={[-10, 0, 8]}>
                <Cylinder args={[0.3, 0.4, 3]} position={[0, 1.5, 0]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
                <Sphere args={[1.5, 16, 16]} position={[0, 3.5, 0]}>
                    <meshStandardMaterial color="#228b22" />
                </Sphere>
            </group>

            {/* Tree 2 - Front Right */}
            <group position={[10, 0, 8]}>
                <Cylinder args={[0.3, 0.4, 3]} position={[0, 1.5, 0]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
                <Sphere args={[1.5, 16, 16]} position={[0, 3.5, 0]}>
                    <meshStandardMaterial color="#228b22" />
                </Sphere>
            </group>

            {/* Tree 3 - Back Left */}
            <group position={[-10, 0, -8]}>
                <Cylinder args={[0.3, 0.4, 3]} position={[0, 1.5, 0]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
                <Sphere args={[1.5, 16, 16]} position={[0, 3.5, 0]}>
                    <meshStandardMaterial color="#228b22" />
                </Sphere>
            </group>

            {/* Tree 4 - Back Right */}
            <group position={[10, 0, -8]}>
                <Cylinder args={[0.3, 0.4, 3]} position={[0, 1.5, 0]}>
                    <meshStandardMaterial color="#654321" />
                </Cylinder>
                <Sphere args={[1.5, 16, 16]} position={[0, 3.5, 0]}>
                    <meshStandardMaterial color="#228b22" />
                </Sphere>
            </group>

            {/* Pathway */}
            <Box args={[2, 0.05, 15]} position={[0, 0.05, 7.5]}>
                <meshStandardMaterial color="#a9a9a9" />
            </Box>
        </group>
    );
};

export default HouseExterior;
