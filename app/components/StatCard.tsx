import { StatCardProps } from "@/types"

export function StatCard({ title, value }: StatCardProps) {
    if (typeof value === 'number') {
        value = Number.isNaN(value) ? 0 : value;
    }

    return (
        <div className="rounded-xl flex flex-col items-center p-2 px-4 bg-primary-3 opacity-100 shadow-lg">
            <div className="font-semibold">
                {title}
            </div>
            <div>
                {value}
            </div>
        </div>
    );
}