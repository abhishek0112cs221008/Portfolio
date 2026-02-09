import { Box, Text, Sphere } from '@react-three/drei';

const Office = () => {
    const skills = ['React', 'Node.js', 'TypeScript', 'MongoDB'];

    return (
        <group position={[5, 0, 0]}>
            {/* Floor */}
            <Box args={[4, 0.1, 6]} position={[0, 0, 0]} receiveShadow>
                <meshStandardMaterial color="#a0826d" />
            </Box>

            {/* Walls */}
            <Box args={[4, 3.5, 0.2]} position={[0, 1.75, -3]} castShadow>
                <meshStandardMaterial color="#e8dcc4" />
            </Box>
            <Box args={[4, 3.5, 0.2]} position={[0, 1.75, 3]} castShadow>
                <meshStandardMaterial color="#e8dcc4" />
            </Box>
            <Box args={[0.2, 3.5, 6]} position={[2, 1.75, 0]} castShadow>
                <meshStandardMaterial color="#e8dcc4" />
            </Box>

            {/* Desk */}
            <Box args={[2, 0.1, 1]} position={[0, 0.8, -1]} castShadow>
                <meshStandardMaterial color="#654321" />
            </Box>
            <Box args={[0.1, 0.8, 0.1]} position={[-0.9, 0.4, -1.4]} castShadow>
                <meshStandardMaterial color="#654321" />
            </Box>
            <Box args={[0.1, 0.8, 0.1]} position={[0.9, 0.4, -1.4]} castShadow>
                <meshStandardMaterial color="#654321" />
            </Box>

            {/* Computer Monitor */}
            <Box args={[0.8, 0.6, 0.05]} position={[0, 1.3, -1]} castShadow>
                <meshStandardMaterial color="#1a1a1a" emissive="#4a90e2" emissiveIntensity={0.3} />
            </Box>

            {/* Skills Display */}
            <Text
                position={[0, 2.5, -2.9]}
                fontSize={0.2}
                color="#000000"
                anchorX="center"
            >
                Skills & Technologies
            </Text>

            {skills.map((skill, index) => (
                <group key={skill} position={[-1 + index * 0.7, 2 - index * 0.3, -2.8]}>
                    <Sphere args={[0.1, 16, 16]}>
                        <meshStandardMaterial color="#2ecc71" />
                    </Sphere>
                    <Text
                        position={[0.3, 0, 0]}
                        fontSize={0.12}
                        color="#000000"
                        anchorX="left"
                    >
                        {skill}
                    </Text>
                </group>
            ))}

            {/* Room Lighting */}
            <pointLight position={[0, 3, 0]} intensity={1.5} />
            <pointLight position={[1, 2, -2]} intensity={0.8} />
        </group>
    );
};

export default Office;
