import { Box, Text } from '@react-three/drei';

const Entrance = () => {
    return (
        <group position={[0, 0, 5]}>
            {/* Floor */}
            <Box args={[4, 0.1, 4]} position={[0, 0, 0]} receiveShadow>
                <meshStandardMaterial color="#d4c5b0" />
            </Box>

            {/* Walls */}
            <Box args={[4, 3, 0.2]} position={[0, 1.5, -2]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>
            <Box args={[0.2, 3, 4]} position={[-2, 1.5, 0]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>
            <Box args={[0.2, 3, 4]} position={[2, 1.5, 0]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>

            {/* Welcome Sign */}
            <Text
                position={[0, 2.5, -1.9]}
                fontSize={0.3}
                color="#000000"
                anchorX="center"
                anchorY="middle"
            >
                Welcome to My Portfolio
            </Text>

            {/* Door to Main Room */}
            <Box args={[1, 2, 0.1]} position={[0, 1, 2]} castShadow>
                <meshStandardMaterial color="#8b4513" />
            </Box>

            {/* Room Lighting */}
            <pointLight position={[0, 2.5, 0]} intensity={1.5} />
        </group>
    );
};

export default Entrance;
