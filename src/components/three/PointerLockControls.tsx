import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const PointerLockControls = () => {
    const { camera, gl } = useThree();

    useEffect(() => {
        const canvas = gl.domElement;
        let isLocked = false;

        const handleClick = () => {
            if (!isLocked) {
                canvas.requestPointerLock();
            }
        };

        const handlePointerLockChange = () => {
            isLocked = document.pointerLockElement === canvas;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isLocked) return;

            const movementX = e.movementX || 0;
            const movementY = e.movementY || 0;

            // Rotate camera based on mouse movement
            camera.rotation.y -= movementX * 0.002;
            camera.rotation.x -= movementY * 0.002;

            // Limit vertical rotation
            camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x));
        };

        canvas.addEventListener('click', handleClick);
        document.addEventListener('pointerlockchange', handlePointerLockChange);
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('click', handleClick);
            document.removeEventListener('pointerlockchange', handlePointerLockChange);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [camera, gl]);

    return null;
};

export default PointerLockControls;
