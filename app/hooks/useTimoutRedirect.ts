"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getWordCount } from "../util";

export function useTimeoutRedirect(time: number, input: string) {
    const router = useRouter();

    useEffect(() => {
        if (time === 0) {
            router.replace('/statistics?typed=' + getWordCount(input));
        }
    }, [time, router, input])
}
