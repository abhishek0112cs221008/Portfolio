import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const KeyboardControls = () => {
    const { camera } = useThree();
    const keysPressed = useRef<{ [key: string]: boolean }>({});
    const velocity = useRef(new THREE.Vector3());
    const direction = useRef(new THREE.Vector3());
    const targetVelocity = useRef(new THREE.Vector3());

    // BGMI-style movement settings
    const walkSpeed = 0.08;
    const sprintSpeed = 0.15;
    const acceleration = 0.3;
    const deceleration = 0.15;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            keysPressed.current[e.key.toLowerCase()] = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            keysPressed.current[e.key.toLowerCase()] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame(() => {
        const keys = keysPressed.current;

        // Check if sprinting (Shift key)
        const isSprinting = keys['shift'];
        const currentSpeed = isSprinting ? sprintSpeed : walkSpeed;

        // Reset target velocity
        targetVelocity.current.set(0, 0, 0);

        // Get camera direction
        camera.getWorldDirection(direction.current);
        direction.current.y = 0; // Keep movement horizontal
        direction.current.normalize();

        // Calculate right vector
        const right = new THREE.Vector3();
        right.crossVectors(camera.up, direction.current).normalize();

        // WASD / Arrow Keys movement
        if (keys['w'] || keys['arrowup']) {
            targetVelocity.current.add(direction.current.clone().multiplyScalar(currentSpeed));
        }
        if (keys['s'] || keys['arrowdown']) {
            targetVelocity.current.add(direction.current.clone().multiplyScalar(-currentSpeed));
        }
        if (keys['a'] || keys['arrowleft']) {
            targetVelocity.current.add(right.clone().multiplyScalar(currentSpeed));
        }
        if (keys['d'] || keys['arrowright']) {
            targetVelocity.current.add(right.clone().multiplyScalar(-currentSpeed));
        }

        // Smooth acceleration/deceleration (BGMI-style inertia)
        if (targetVelocity.current.length() > 0) {
            // Accelerate
            velocity.current.lerp(targetVelocity.current, acceleration);
        } else {
            // Decelerate
            velocity.current.lerp(new THREE.Vector3(0, 0, 0), deceleration);
        }

        // Apply movement
        camera.position.add(velocity.current);

        // Keep camera at eye level (1.7m like BGMI character)
        camera.position.y = 1.7;

        // Boundary limits (keep player in house area)
        camera.position.x = Math.max(-12, Math.min(12, camera.position.x));
        camera.position.z = Math.max(-12, Math.min(12, camera.position.z));
    });

    return null;
};

export default KeyboardControls;
