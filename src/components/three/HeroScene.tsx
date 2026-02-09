import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const HeroScene = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf5af2" />

                <InteractiveShape />
                <OrbitingParticles />
            </Canvas>
        </div>
    );
};

// Main interactive 3D shape
const InteractiveShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth rotation
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;

            // Mouse parallax effect
            const x = state.mouse.x * 0.5;
            const y = state.mouse.y * 0.5;
            meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.1);
            meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.1);
        }
    });

    return (
        <mesh ref={meshRef} scale={1.5}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <MeshDistortMaterial
                color="#2997ff"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={0.8}
                transparent
                opacity={0.9}
            />
        </mesh>
    );
};

// Orbiting particles around the shape
const OrbitingParticles = () => {
    const groupRef = useRef<THREE.Group>(null);
    const particleCount = 100;

    const particles = Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 2 + Math.random() * 0.5;
        return {
            position: [
                Math.cos(angle) * radius,
                (Math.random() - 0.5) * 2,
                Math.sin(angle) * radius
            ] as [number, number, number],
            scale: Math.random() * 0.05 + 0.02
        };
    });

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            {particles.map((particle, i) => (
                <mesh key={i} position={particle.position} scale={particle.scale}>
                    <sphereGeometry args={[1, 8, 8]} />
                    <meshStandardMaterial
                        color={i % 2 === 0 ? "#2997ff" : "#bf5af2"}
                        emissive={i % 2 === 0 ? "#2997ff" : "#bf5af2"}
                        emissiveIntensity={0.5}
                    />
                </mesh>
            ))}
        </group>
    );
};

export default HeroScene;
