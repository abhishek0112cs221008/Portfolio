import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FloatingShapes from './FloatingShapes';
import ParticleField from './ParticleField';
import { getOptimizedSettings, isWebGLAvailable } from './utils/performance';

const ThreeBackground = () => {
    // Check WebGL support
    if (!isWebGLAvailable()) {
        return null; // Graceful fallback - just don't render 3D
    }

    const settings = getOptimizedSettings();

    return (
        <div className="fixed inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                dpr={settings.pixelRatio}
                performance={{ min: 0.5 }}
                gl={{
                    antialias: settings.antialias,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <Suspense fallback={null}>
                    {/* Ambient lighting */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bf5af2" />

                    {/* 3D Elements */}
                    <FloatingShapes count={settings.shapeCount} />
                    <ParticleField count={settings.particleCount} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
