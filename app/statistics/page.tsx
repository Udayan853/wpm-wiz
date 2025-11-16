'use client';

import { ClientOnly } from "../components/ClientOnly";
import { StatisticsClientData } from "../components/StatisticsClientData";

export default function Statistics() {
    return (
        <ClientOnly>
            <StatisticsClientData />
        </ClientOnly>
    );
}