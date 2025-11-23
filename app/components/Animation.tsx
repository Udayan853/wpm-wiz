"use client";

import characterSprite from "@/public/spritesheet-v2.png";
import Image from "next/image";

export function Animation() {
    return (
        <div className="overflow-hidden relative w-[140px] h-[150px]">
            <Image
                src={characterSprite}
                alt="There should be animation here"
                width={characterSprite.width}
                height={characterSprite.height}
                className="absolute max-w-none animate-run"
            />
        </div>
    );
}