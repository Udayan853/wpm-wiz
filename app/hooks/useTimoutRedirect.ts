"use client";

import { useRouter } from "next/navigation";
import { RefObject, useEffect } from "react";
import { WpmTimestamp } from "@/types";
import { SPACE } from "../util/constants";

export function useTimeoutRedirect(time: number, wpmTimestampRef: RefObject<WpmTimestamp[]>, input: string, letters: string[]) {
    const router = useRouter();

    useEffect(() => {
        if (time === 0) {
            localStorage.setItem('wpm-timestamp-data', JSON.stringify(wpmTimestampRef.current));
            let correct = 0, incorrect = 0;
            input.split('').forEach((ch, indx) => {
                if ((letters[indx] === SPACE && ch === " ") || ch === letters[indx]) correct++;
                else incorrect++;
            })
            localStorage.setItem('metrics', JSON.stringify({ correct, incorrect }))
            router.replace('/statistics');
        }
    }, [time, router, wpmTimestampRef, input, letters]);
}