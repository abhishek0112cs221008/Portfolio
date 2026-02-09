// Performance optimization utilities for Three.js

// Detect device performance level
export const getPerformanceLevel = (): 'high' | 'medium' | 'low' => {
    // Check for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        return 'low';
    }

    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 2;

    // Check memory (if available)
    const memory = (navigator as any).deviceMemory;

    if (cores >= 8 && (!memory || memory >= 8)) {
        return 'high';
    } else if (cores >= 4) {
        return 'medium';
    }

    return 'low';
};

// Get optimized settings based on performance level
export const getOptimizedSettings = () => {
    const level = getPerformanceLevel();

    switch (level) {
        case 'high':
            return {
                particleCount: 300,
                shapeCount: 5,
                enablePostProcessing: true,
                pixelRatio: Math.min(window.devicePixelRatio, 2),
                shadowsEnabled: false, // Shadows are expensive
                antialias: true
            };
        case 'medium':
            return {
                particleCount: 150,
                shapeCount: 3,
                enablePostProcessing: false,
                pixelRatio: 1,
                shadowsEnabled: false,
                antialias: true
            };
        case 'low':
            return {
                particleCount: 50,
                shapeCount: 2,
                enablePostProcessing: false,
                pixelRatio: 1,
                shadowsEnabled: false,
                antialias: false
            };
    }
};

// Check WebGL support
export const isWebGLAvailable = (): boolean => {
    try {
        const canvas = document.createElement('canvas');
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
    } catch (e) {
        return false;
    }
};
