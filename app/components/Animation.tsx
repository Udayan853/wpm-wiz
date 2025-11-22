"use client";

import characterSprite from "@/public/spritesheet-v1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Coordinates } from "@/types";

export function Animation() {
    const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setCoordinates((prev) => {
                const updated = { ...prev };
                if (prev.x >= 300) updated.x = 0;
                else updated.x += 100;
                return updated;
            });
        }, 150);
        return () => clearInterval(intervalRef);
    }, []);

    return (
        <div className="overflow-hidden relative w-[100px] h-[150px]">
            <Image
                src={characterSprite}
                alt="There should be animation here"
                width={characterSprite.width}
                height={characterSprite.height}
                style={{
                    transform: `translate(-${coordinates.x + 60}px, -${coordinates.y + 40}px)`
                }}
                className="absolute max-w-none"
            />
        </div>
    );
}