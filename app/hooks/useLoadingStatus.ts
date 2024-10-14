import { useState, useEffect } from "react";
import { LoadingStates } from "@/types/loading-states.enum";

export const useLoadingStatus = (
  targetDurationMs = 1250
): { loadingStatus: LoadingStates; progress: number } => {
  const [loadingStatus, setLoadingStatus] = useState(LoadingStates.LOADING);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    const framesPerSecond = 60;
    const totalFrames = Math.round((targetDurationMs / 1000) * framesPerSecond);
    let currentFrame = 0;

    if (loadingStatus === LoadingStates.LOADING) {
      interval = setInterval(() => {
        currentFrame++;
        const newProgress = Math.round((currentFrame / totalFrames) * 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval!);
          setLoadingStatus(LoadingStates.LOADED);
        }
      }, 1000 / framesPerSecond);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [loadingStatus, targetDurationMs]);

  return { loadingStatus, progress };
};
