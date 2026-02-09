import { Box, Text, Sphere } from '@react-three/drei';
import { useState } from 'react';

interface MainRoomProps {
    onProjectClick?: (projectId: string) => void;
}

const MainRoom = ({ onProjectClick }: MainRoomProps) => {
    const [hoveredScreen, setHoveredScreen] = useState<number | null>(null);

    const projects = [
        { id: '1', title: 'E-Commerce', color: '#4a90e2' },
        { id: '2', title: 'Task Manager', color: '#2ecc71' },
        { id: '3', title: 'Portfolio', color: '#9b59b6' }
    ];

    return (
        <group position={[0, 0, 0]}>
            {/* Floor */}
            <Box args={[8, 0.1, 8]} position={[0, 0, 0]} receiveShadow>
                <meshStandardMaterial color="#8b7355" />
            </Box>

            {/* Walls */}
            <Box args={[8, 4, 0.2]} position={[0, 2, -4]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>
            <Box args={[0.2, 4, 8]} position={[-4, 2, 0]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>
            <Box args={[0.2, 4, 8]} position={[4, 2, 0]} castShadow>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>

            {/* Ceiling */}
            <Box args={[8, 0.2, 8]} position={[0, 4, 0]}>
                <meshStandardMaterial color="#ffffff" />
            </Box>

            {/* Project Screens on Back Wall */}
            {projects.map((project, index) => (
                <group key={project.id} position={[-2 + index * 2, 2, -3.8]}>
                    <Box
                        args={[1.5, 1, 0.1]}
                        onPointerOver={() => setHoveredScreen(index)}
                        onPointerOut={() => setHoveredScreen(null)}
                        onClick={() => onProjectClick?.(project.id)}
                    >
                        <meshStandardMaterial
                            color={project.color}
                            emissive={project.color}
                            emissiveIntensity={hoveredScreen === index ? 0.5 : 0.2}
                        />
                    </Box>
                    <Text
                        position={[0, -0.7, 0.1]}
                        fontSize={0.15}
                        color="#000000"
                        anchorX="center"
                    >
                        {project.title}
                    </Text>
                </group>
            ))}

            {/* Central Light */}
            <Sphere args={[0.2, 16, 16]} position={[0, 3.5, 0]}>
                <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={1} />
            </Sphere>
            <pointLight position={[0, 3.5, 0]} intensity={2} distance={15} />

            {/* Additional Corner Lights */}
            <pointLight position={[3, 3, 3]} intensity={0.8} />
            <pointLight position={[-3, 3, 3]} intensity={0.8} />
            <pointLight position={[3, 3, -3]} intensity={0.8} />
            <pointLight position={[-3, 3, -3]} intensity={0.8} />
        </group>
    );
};

export default MainRoom;
