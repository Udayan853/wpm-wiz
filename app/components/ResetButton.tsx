import { RotateCcw } from "lucide-react";
import { useRouter } from 'next/navigation'

export function ResetButton() {
    const router = useRouter();
    return <button className="cursor-pointer border p-2 rounded-full border-white/30" onClick={() => router.push('/')}><RotateCcw /></button>
}