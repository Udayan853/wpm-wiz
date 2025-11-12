import { useRef, useState } from "react";

export function useTimer(interval = 30) {
    const [time, setTime] = useState(interval);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const start = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current ?? undefined);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }

    const pause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    return { start, pause, time }
}