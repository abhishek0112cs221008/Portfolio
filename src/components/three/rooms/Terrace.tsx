import { Box, Text, Sphere } from '@react-three/drei';

const Terrace = () => {
    return (
        <group position={[0, 0, -6]}>
            {/* Floor (outdoor) */}
            <Box args={[6, 0.1, 4]} position={[0, 0, 0]} receiveShadow>
                <meshStandardMaterial color="#7a9d7e" />
            </Box>

            {/* Railing */}
            <Box args={[6, 0.1, 0.1]} position={[0, 1, -2]} castShadow>
                <meshStandardMaterial color="#8b7355" />
            </Box>
            <Box args={[0.1, 1, 0.1]} position={[-3, 0.5, -2]} castShadow>
                <meshStandardMaterial color="#8b7355" />
            </Box>
            <Box args={[0.1, 1, 0.1]} position={[3, 0.5, -2]} castShadow>
                <meshStandardMaterial color="#8b7355" />
            </Box>

            {/* Contact Sign */}
            <Text
                position={[0, 2.5, 0]}
                fontSize={0.3}
                color="#000000"
                anchorX="center"
            >
                Get In Touch
            </Text>

            {/* Email Display */}
            <Text
                position={[0, 1.8, 0]}
                fontSize={0.15}
                color="#4a90e2"
                anchorX="center"
            >
                your.email@example.com
            </Text>

            {/* Social Icons (represented as spheres) */}
            <group position={[0, 1.2, 0]}>
                <Sphere args={[0.15, 16, 16]} position={[-0.6, 0, 0]}>
                    <meshStandardMaterial color="#333333" />
                </Sphere>
                <Text position={[-0.6, -0.3, 0]} fontSize={0.1} color="#000000" anchorX="center">
                    GitHub
                </Text>

                <Sphere args={[0.15, 16, 16]} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#0077b5" />
                </Sphere>
                <Text position={[0, -0.3, 0]} fontSize={0.1} color="#000000" anchorX="center">
                    LinkedIn
                </Text>

                <Sphere args={[0.15, 16, 16]} position={[0.6, 0, 0]}>
                    <meshStandardMaterial color="#1da1f2" />
                </Sphere>
                <Text position={[0.6, -0.3, 0]} fontSize={0.1} color="#000000" anchorX="center">
                    Twitter
                </Text>
            </group>

            {/* Ambient Light for outdoor feel */}
            <pointLight position={[0, 3, 0]} intensity={0.8} color="#ffd700" />
        </group>
    );
};

export default Terrace;
