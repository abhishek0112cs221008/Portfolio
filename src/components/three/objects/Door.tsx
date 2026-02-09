import { Box, Text } from '@react-three/drei';

interface DoorProps {
    position: [number, number, number];
    rotation?: [number, number, number];
    label: string;
    sublabel?: string;
}

const Door = ({ position, rotation = [0, 0, 0], label, sublabel }: DoorProps) => {
    return (
        <group position={position} rotation={rotation}>
            {/* Door Frame */}
            <Box args={[0.1, 2.2, 1.2]} position={[-0.55, 1.1, 0]}>
                <meshStandardMaterial color="#654321" />
            </Box>
            <Box args={[0.1, 2.2, 1.2]} position={[0.55, 1.1, 0]}>
                <meshStandardMaterial color="#654321" />
            </Box>
            <Box args={[1.2, 0.1, 1.2]} position={[0, 2.2, 0]}>
                <meshStandardMaterial color="#654321" />
            </Box>

            {/* Door */}
            <Box args={[1, 2, 0.1]} position={[0, 1, 0]}>
                <meshStandardMaterial color="#8b4513" />
            </Box>

            {/* Door Handle */}
            <Box args={[0.05, 0.15, 0.15]} position={[0.4, 1, 0.1]}>
                <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
            </Box>

            {/* Sign Above Door */}
            <group position={[0, 2.5, 0.1]}>
                <Box args={[1.4, 0.4, 0.05]}>
                    <meshStandardMaterial color="#2c1810" />
                </Box>
                <Text
                    position={[0, 0, 0.05]}
                    fontSize={0.15}
                    color="#ffd700"
                    anchorX="center"
                    anchorY="middle"
                >
                    {label}
                </Text>
                {sublabel && (
                    <Text
                        position={[0, -0.15, 0.05]}
                        fontSize={0.08}
                        color="#d4af37"
                        anchorX="center"
                        anchorY="middle"
                    >
                        {sublabel}
                    </Text>
                )}
            </group>
        </group>
    );
};

export default Door;
