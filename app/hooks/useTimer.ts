import { WpmTimestamp } from "@/types";
import { useEffect, useRef, useState } from "react";

export function useTimer(input: string, focused: boolean, interval = 30) {
    const [time, setTime] = useState(interval);
    const wpmTimestampRef = useRef<WpmTimestamp[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const inputLengthRef = useRef(0);
    const timeRef = useRef(interval);

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
            wpmTimestampRef.current.push({ time: 31 - timeRef.current, wpm: (inputLengthRef.current / 5) * (60 / (31 - timeRef.current)) });
            timeRef.current--;
        }, 1000);
    }

    const pause = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    useEffect(() => {
        console.log()
        inputLengthRef.current = input.length;
        if (input.length >= 1) start()
    }, [input.length]);

    useEffect(() => {
        if (!focused) pause();
    }, [focused]);

    return { start, pause, time, wpmTimestampRef };
}