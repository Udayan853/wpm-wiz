"use client";

import { useRouter } from "next/navigation";
import { RefObject, useEffect } from "react";
import { WpmTimestamp } from "@/types";

export function useTimeoutRedirect(time: number, wpmTimestampRef: RefObject<WpmTimestamp[]>) {
    const router = useRouter();

    useEffect(() => {
        if (time === 0) {
            localStorage.setItem('wpm-timestamp-data', JSON.stringify(wpmTimestampRef.current));
            router.replace('/statistics');
        }
    }, [time, router, wpmTimestampRef])
}
