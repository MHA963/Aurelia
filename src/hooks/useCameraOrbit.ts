import { useCallback, useRef } from 'react';

export interface CameraOrbitState {
  theta: number;
  phi: number;
  radius: number;
}

export interface UseCameraOrbitOptions {
  baseTheta?: number;
  basePhi?: number;
  baseRadius?: number;
  rotationSpan?: number;
}

/**
 * Custom hook providing GPU-friendly 3D camera orbit interpolations
 * and CSS 3D fallback transform calculations without creating intermediate tween allocations.
 */
export const useCameraOrbit = (options: UseCameraOrbitOptions = {}) => {
  const {
    baseTheta = -45,
    basePhi = 75,
    baseRadius = 105,
    rotationSpan = 360,
  } = options;

  const lastProgress = useRef<number>(0);

  const calculateOrbit = useCallback((progress: number): { orbitString: string; cssTransform: string } => {
    lastProgress.current = progress;
    const theta = baseTheta + (progress * rotationSpan);
    const orbitString = `${theta}deg ${basePhi}deg ${baseRadius}%`;
    const cssTransform = `rotateY(${progress * rotationSpan}deg) scale(${1 + progress * 0.5}) translateZ(${progress * 200}px)`;

    return { orbitString, cssTransform };
  }, [baseTheta, basePhi, baseRadius, rotationSpan]);

  return {
    calculateOrbit,
    lastProgress,
  };
};
