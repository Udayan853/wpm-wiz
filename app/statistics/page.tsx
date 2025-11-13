"use client";
import { useSearchParams } from "next/navigation"

export default function Statistics() {
    const params = useSearchParams();
    const typedWordCount = Number.parseInt(params.get('typed') ?? '0');
    const typed = Number.isNaN(typedWordCount) ? 0 : 2 * typedWordCount;
    return <>WPM: {typed}</>
}