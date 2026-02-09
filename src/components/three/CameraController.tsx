import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { cameraPositions, type RoomName } from './utils/cameraPositions';
import * as THREE from 'three';

interface CameraControllerProps {
    targetRoom: RoomName;
}

const CameraController = ({ targetRoom }: CameraControllerProps) => {
    const { camera } = useThree();
    const lookAtTarget = useRef(new THREE.Vector3());

    useEffect(() => {
        const target = cameraPositions[targetRoom];

        // Animate camera position
        gsap.to(camera.position, {
            x: target.position[0],
            y: target.position[1],
            z: target.position[2],
            duration: 2,
            ease: "power2.inOut",
        });

        // Animate lookAt target
        gsap.to(lookAtTarget.current, {
            x: target.lookAt[0],
            y: target.lookAt[1],
            z: target.lookAt[2],
            duration: 2,
            ease: "power2.inOut",
            onUpdate: () => {
                camera.lookAt(lookAtTarget.current);
            }
        });
    }, [targetRoom, camera]);

    return null;
};

export default CameraController;
