import { useEffect, useState } from "react";
import { Fallback } from "./Fallback";

export function ClientOnly({ children }: { children: React.ReactNode }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => setHasMounted(true), []);
    return hasMounted ? <>{children}</> : <Fallback />;
}