import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapesProps {
    count?: number;
}

const FloatingShapes = ({ count = 5 }: FloatingShapesProps) => {
    const shapes = [];

    // Always include main shapes
    if (count >= 1) {
        shapes.push(
            <Float
                key="icosahedron"
                speed={1.5}
                rotationIntensity={0.5}
                floatIntensity={0.5}
                floatingRange={[-0.5, 0.5]}
            >
                <mesh position={[2, 1, 0]} castShadow>
                    <icosahedronGeometry args={[1, 1]} />
                    <MeshDistortMaterial
                        color="#2997ff"
                        attach="material"
                        distort={0.3}
                        speed={2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>
        );
    }

    if (count >= 2) {
        shapes.push(
            <Float
                key="torus"
                speed={1.2}
                rotationIntensity={0.3}
                floatIntensity={0.3}
                floatingRange={[-0.3, 0.3]}
            >
                <mesh position={[-2, -1, -1]} castShadow>
                    <torusGeometry args={[0.6, 0.2, 16, 100]} />
                    <MeshDistortMaterial
                        color="#bf5af2"
                        attach="material"
                        distort={0.2}
                        speed={1.5}
                        roughness={0.1}
                        metalness={0.9}
                    />
                </mesh>
            </Float>
        );
    }

    if (count >= 3) {
        shapes.push(
            <Float
                key="sphere"
                speed={1.8}
                rotationIntensity={0.4}
                floatIntensity={0.6}
                floatingRange={[-0.4, 0.4]}
            >
                <mesh position={[-3, 2, -2]} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#0A84FF"
                        roughness={0.3}
                        metalness={0.7}
                        emissive="#0A84FF"
                        emissiveIntensity={0.2}
                    />
                </mesh>
            </Float>
        );
    }

    if (count >= 4) {
        shapes.push(
            <Float
                key="octahedron"
                speed={1.3}
                rotationIntensity={0.6}
                floatIntensity={0.4}
                floatingRange={[-0.3, 0.3]}
            >
                <mesh position={[3, -2, -1.5]} castShadow>
                    <octahedronGeometry args={[0.7, 0]} />
                    <meshStandardMaterial
                        color="#2997ff"
                        roughness={0.2}
                        metalness={0.8}
                        wireframe={false}
                    />
                </mesh>
            </Float>
        );
    }

    if (count >= 5) {
        shapes.push(<RotatingCube key="cube" position={[0, -2.5, -2]} />);
    }

    return <group>{shapes}</group>;
};

// Rotating cube component
const RotatingCube = ({ position }: { position: [number, number, number] }) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef} position={position} castShadow>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial
                color="#bf5af2"
                roughness={0.3}
                metalness={0.7}
            />
        </mesh>
    );
};

export default FloatingShapes;
