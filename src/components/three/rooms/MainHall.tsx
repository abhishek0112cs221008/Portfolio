import { useRef, useState } from 'react';
import { Box, Text, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MainHallProps {
    onRoomClick: (roomName: string) => void;
}

interface RoomDoor {
    name: string;
    position: [number, number, number];
    rotation: [number, number, number];
    color: string;
    icon: string;
}

const rooms: RoomDoor[] = [
    { name: 'About Me', position: [0, 1.5, -5], rotation: [0, 0, 0], color: '#4a90e2', icon: '👤' },
    { name: 'Skills', position: [-4, 1.5, -3], rotation: [0, Math.PI / 4, 0], color: '#e74c3c', icon: '🔧' },
    { name: 'Projects', position: [4, 1.5, -3], rotation: [0, -Math.PI / 4, 0], color: '#2ecc71', icon: '💼' },
    { name: 'Education', position: [-4, 1.5, 0], rotation: [0, Math.PI / 2, 0], color: '#f39c12', icon: '📚' },
    { name: 'Experience', position: [4, 1.5, 0], rotation: [0, -Math.PI / 2, 0], color: '#9b59b6', icon: '🏆' },
    { name: 'Contact', position: [0, 1.5, 3], rotation: [0, Math.PI, 0], color: '#1abc9c', icon: '📧' },
];

const MainHall = ({ onRoomClick }: MainHallProps) => {
    const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);

    return (
        <group>
            {/* Hall Walls */}
            <Box args={[12, 5, 0.2]} position={[0, 2.5, -6]}>
                <meshStandardMaterial color="#d4c5b0" />
            </Box>
            <Box args={[12, 5, 0.2]} position={[0, 2.5, 4]}>
                <meshStandardMaterial color="#d4c5b0" />
            </Box>
            <Box args={[0.2, 5, 10]} position={[-6, 2.5, -1]}>
                <meshStandardMaterial color="#d4c5b0" />
            </Box>
            <Box args={[0.2, 5, 10]} position={[6, 2.5, -1]}>
                <meshStandardMaterial color="#d4c5b0" />
            </Box>

            {/* Ceiling */}
            <Box args={[12, 0.2, 10]} position={[0, 5, -1]}>
                <meshStandardMaterial color="#f5f5dc" />
            </Box>

            {/* Chandelier */}
            <group position={[0, 4.5, -1]}>
                <Sphere args={[0.3, 16, 16]}>
                    <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
                </Sphere>
                <pointLight position={[0, 0, 0]} intensity={2} color="#fff8dc" distance={15} />
            </group>

            {/* Welcome Text */}
            <Text
                position={[0, 3.5, -5.8]}
                fontSize={0.4}
                color="#333333"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Inter-Bold.woff"
            >
                Welcome to My Portfolio
            </Text>

            {/* Room Doors */}
            {rooms.map((room) => (
                <RoomDoorComponent
                    key={room.name}
                    {...room}
                    isHovered={hoveredDoor === room.name}
                    onHover={() => setHoveredDoor(room.name)}
                    onLeave={() => setHoveredDoor(null)}
                    onClick={() => onRoomClick(room.name)}
                />
            ))}

            {/* Floor Pattern */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -1]} receiveShadow>
                <planeGeometry args={[12, 10]} />
                <meshStandardMaterial color="#8b7355" roughness={0.8} />
            </mesh>

            {/* Decorative Rug */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -1]} receiveShadow>
                <planeGeometry args={[4, 6]} />
                <meshStandardMaterial color="#8b0000" roughness={0.9} />
            </mesh>
        </group>
    );
};

interface RoomDoorComponentProps extends RoomDoor {
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
    onClick: () => void;
}

const RoomDoorComponent = ({
    name,
    position,
    rotation,
    color,
    icon,
    isHovered,
    onHover,
    onLeave,
    onClick
}: RoomDoorComponentProps) => {
    const doorRef = useRef<THREE.Group>(null);
    const glowIntensity = useRef(0);

    useFrame(() => {
        if (isHovered) {
            glowIntensity.current = Math.min(glowIntensity.current + 0.05, 1);
        } else {
            glowIntensity.current = Math.max(glowIntensity.current - 0.05, 0);
        }

        if (doorRef.current) {
            doorRef.current.scale.setScalar(1 + glowIntensity.current * 0.05);
        }
    });

    return (
        <group ref={doorRef} position={position} rotation={rotation}>
            {/* Door Frame */}
            <Box args={[0.1, 2.5, 0.1]} position={[-0.6, 0, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>
            <Box args={[0.1, 2.5, 0.1]} position={[0.6, 0, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>
            <Box args={[1.3, 0.1, 0.1]} position={[0, 1.25, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>

            {/* Door */}
            <Box
                args={[1.2, 2.4, 0.1]}
                position={[0, 0, 0]}
                onPointerOver={onHover}
                onPointerOut={onLeave}
                onClick={onClick}
                castShadow
            >
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={glowIntensity.current * 0.3}
                    roughness={0.7}
                />
            </Box>

            {/* Door Handle */}
            <mesh position={[0.5, 0, 0.1]}>
                <sphereGeometry args={[0.04, 16, 16]} />
                <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Room Name Sign */}
            <Text
                position={[0, 1.5, 0.1]}
                fontSize={0.15}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.01}
                outlineColor="#000000"
            >
                {icon} {name}
            </Text>

            {/* Glow Effect when hovered */}
            {isHovered && (
                <pointLight
                    position={[0, 0, 0.5]}
                    intensity={glowIntensity.current * 2}
                    color={color}
                    distance={3}
                />
            )}
        </group>
    );
};

export default MainHall;
