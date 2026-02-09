import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
    count?: number;
}

const ParticleField = ({ count = 300 }: ParticleFieldProps) => {
    const points = useRef<THREE.Points>(null);

    // Generate random particle positions
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }

        return positions;
    }, [count]);

    // Animate particles
    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.05;

            // Gentle floating motion
            const positions = points.current.geometry.attributes.position.array as Float32Array;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                positions[i3 + 1] = Math.sin(state.clock.elapsedTime + i) * 0.1 + particlesPosition[i3 + 1];
            }
            points.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#2997ff"
                sizeAttenuation
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default ParticleField;
