export const usePrefersReducedMotion = () => {
    if (!window.matchMedia) return false;

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
