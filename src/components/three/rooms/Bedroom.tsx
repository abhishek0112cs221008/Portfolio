import { Box, Text, Sphere } from '@react-three/drei';

const Bedroom = () => {
    return (
        <group position={[-5, 0, 0]}>
            {/* Floor */}
            <Box args={[4, 0.1, 6]} position={[0, 0, 0]} receiveShadow>
                <meshStandardMaterial color="#c9b8a8" />
            </Box>

            {/* Walls */}
            <Box args={[4, 3.5, 0.2]} position={[0, 1.75, -3]} castShadow>
                <meshStandardMaterial color="#f0e6d2" />
            </Box>
            <Box args={[4, 3.5, 0.2]} position={[0, 1.75, 3]} castShadow>
                <meshStandardMaterial color="#f0e6d2" />
            </Box>
            <Box args={[0.2, 3.5, 6]} position={[-2, 1.75, 0]} castShadow>
                <meshStandardMaterial color="#f0e6d2" />
            </Box>

            {/* Bed */}
            <Box args={[1.5, 0.3, 2]} position={[0, 0.3, -1]} castShadow>
                <meshStandardMaterial color="#8b4789" />
            </Box>
            <Box args={[1.5, 0.5, 0.2]} position={[0, 0.55, -2]} castShadow>
                <meshStandardMaterial color="#6b3569" />
            </Box>

            {/* About Me Sign */}
            <Text
                position={[0, 2.5, -2.9]}
                fontSize={0.25}
                color="#000000"
                anchorX="center"
            >
                About Me
            </Text>

            {/* Bio Points */}
            <Text
                position={[0, 2, -2.8]}
                fontSize={0.12}
                color="#333333"
                anchorX="center"
                maxWidth={3}
                textAlign="center"
            >
                Full Stack Developer{'\n'}
                Passionate about creating{'\n'}
                beautiful web experiences
            </Text>

            {/* Decorative Spheres */}
            <Sphere args={[0.15, 16, 16]} position={[-0.5, 0.8, 1]}>
                <meshStandardMaterial color="#4a90e2" />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[0.5, 0.8, 1.2]}>
                <meshStandardMaterial color="#9b59b6" />
            </Sphere>

            {/* Room Lighting */}
            <pointLight position={[0, 3, 0]} intensity={1.5} />
            <pointLight position={[-1, 2, -2]} intensity={0.8} />
        </group>
    );
};

export default Bedroom;
