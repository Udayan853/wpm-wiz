import { StatCardProps } from "@/types"

export function StatCard({ title, value }: StatCardProps) {
    return <div className="border rounded-xl flex flex-col items-center p-2 px-4">
        <div>
            {title}
        </div>
        <div>
            {Number.isNaN(value) ? 0 : value}
        </div>
    </div>
}