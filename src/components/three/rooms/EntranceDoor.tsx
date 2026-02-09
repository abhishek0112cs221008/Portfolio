import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

interface EntranceDoorProps {
    onComplete: () => void;
}

const EntranceDoor = ({ onComplete }: EntranceDoorProps) => {
    const leftDoorRef = useRef<THREE.Group>(null);
    const rightDoorRef = useRef<THREE.Group>(null);
    const startTime = useRef(Date.now());

    useEffect(() => {
        // Trigger door opening after 1 second
        const timer = setTimeout(() => {
            startTime.current = Date.now();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useFrame((state) => {
        const elapsed = (Date.now() - startTime.current) / 1000;

        // Door opening animation (0-2 seconds)
        if (elapsed < 2 && elapsed > 0) {
            const progress = Math.min(elapsed / 2, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

            if (leftDoorRef.current) {
                leftDoorRef.current.rotation.y = -eased * Math.PI / 2;
            }
            if (rightDoorRef.current) {
                rightDoorRef.current.rotation.y = eased * Math.PI / 2;
            }
        }

        // Camera movement (1-3 seconds)
        if (elapsed > 1 && elapsed < 3) {
            const progress = Math.min((elapsed - 1) / 2, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            state.camera.position.z = 5 - eased * 3; // Move from 5 to 2
        }

        // Complete animation
        if (elapsed > 3) {
            onComplete();
        }
    });

    return (
        <group position={[0, 0, 0]}>
            {/* Door Frame */}
            <Box args={[0.2, 3, 0.2]} position={[-1.5, 1.5, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>
            <Box args={[0.2, 3, 0.2]} position={[1.5, 1.5, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>
            <Box args={[3.4, 0.2, 0.2]} position={[0, 3, 0]}>
                <meshStandardMaterial color="#4a3728" />
            </Box>

            {/* Left Door */}
            <group ref={leftDoorRef} position={[-0.75, 1.5, 0]}>
                <Box args={[1.5, 3, 0.1]} position={[0.75, 0, 0]} castShadow>
                    <meshStandardMaterial color="#6b4423" roughness={0.8} />
                </Box>
                {/* Door Handle */}
                <mesh position={[1.3, 0, 0.1]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
                </mesh>
            </group>

            {/* Right Door */}
            <group ref={rightDoorRef} position={[0.75, 1.5, 0]}>
                <Box args={[1.5, 3, 0.1]} position={[-0.75, 0, 0]} castShadow>
                    <meshStandardMaterial color="#6b4423" roughness={0.8} />
                </Box>
                {/* Door Handle */}
                <mesh position={[-1.3, 0, 0.1]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
                </mesh>
            </group>

            {/* Welcome Sign Above Door */}
            <Text
                position={[0, 3.5, 0]}
                fontSize={0.3}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
            >
                ABHISHEK'S PORTFOLIO
            </Text>

            {/* Walls around door */}
            <Box args={[10, 5, 0.2]} position={[0, 2.5, -0.2]}>
                <meshStandardMaterial color="#e8dcc4" />
            </Box>

            {/* Light from inside */}
            <pointLight position={[0, 2, -2]} intensity={2} color="#ffd700" distance={10} />
        </group>
    );
};

export default EntranceDoor;
