
// Transition defaults
export const defaultTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
} as const;

export const slowTransition = {
    type: "spring",
    stiffness: 50,
    damping: 20,
    mass: 1,
} as const;

// Container variants (for staggering children)
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

// Item variants
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: defaultTransition
    },
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -30 },
    show: {
        opacity: 1,
        y: 0,
        transition: defaultTransition
    },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: defaultTransition
    },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    show: {
        opacity: 1,
        x: 0,
        transition: defaultTransition
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: defaultTransition
    },
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

export const tapScale = {
    scale: 0.95,
};

// Scroll Reveal Wrapper configuration
export const viewportConfig = { once: true, margin: "-100px" };
