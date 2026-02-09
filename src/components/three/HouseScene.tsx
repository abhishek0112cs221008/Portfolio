import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import EntranceDoor from './rooms/EntranceDoor';
import MainHall from './rooms/MainHall';

type SceneState = 'entrance' | 'hall' | 'room';

interface HouseSceneProps {
    onRoomSelect?: (room: string) => void;
}

const HouseScene = ({ onRoomSelect }: HouseSceneProps) => {
    const [sceneState, setSceneState] = useState<SceneState>('entrance');
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

    const handleDoorOpen = () => {
        setTimeout(() => {
            setSceneState('hall');
        }, 3000); // Wait for door animation
    };

    const handleRoomClick = (roomName: string) => {
        setSelectedRoom(roomName);
        setSceneState('room');
        onRoomSelect?.(roomName);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 1.6, 5]} fov={75} />

                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.3} />
                    <pointLight position={[10, 10, 10]} intensity={0.5} />
                    <spotLight
                        position={[0, 5, 0]}
                        angle={0.3}
                        penumbra={1}
                        intensity={1}
                        castShadow
                    />

                    {/* Scene Content */}
                    {sceneState === 'entrance' && (
                        <EntranceDoor onComplete={handleDoorOpen} />
                    )}

                    {sceneState === 'hall' && (
                        <MainHall onRoomClick={handleRoomClick} />
                    )}

                    {/* Ground */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                        <planeGeometry args={[50, 50]} />
                        <meshStandardMaterial color="#2a2a2a" />
                    </mesh>

                    {/* Camera Controls */}
                    <OrbitControls
                        enablePan={false}
                        enableZoom={true}
                        maxPolarAngle={Math.PI / 2}
                        minDistance={3}
                        maxDistance={15}
                    />
                </Suspense>
            </Canvas>

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 z-10">
                <div className="glass px-4 py-2 rounded-lg">
                    <p className="text-sm text-white font-medium">
                        {sceneState === 'entrance' && 'Welcome! Door opening...'}
                        {sceneState === 'hall' && 'Click on a door to explore'}
                        {sceneState === 'room' && `Exploring: ${selectedRoom}`}
                    </p>
                </div>
            </div>

            {/* Back Button */}
            {sceneState === 'room' && (
                <button
                    onClick={() => setSceneState('hall')}
                    className="absolute top-4 right-4 z-10 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                >
                    Back to Hall
                </button>
            )}
        </div>
    );
};

export default HouseScene;
