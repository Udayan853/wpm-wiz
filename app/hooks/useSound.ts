import { useCallback, useEffect, useRef } from "react";

export function useSound(src: string) {
    const soundRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        soundRef.current = new Audio(src);
    }, [src, soundRef]);

    return useCallback(() => {
        const sound = soundRef.current
        if (!sound) return;
        sound.currentTime = 0;
        sound.play();
    }, [soundRef])
}