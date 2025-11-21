import { Metrics, WpmTimestamp } from "@/types";
import { AreaChartComponent } from "./AreaChart";
import { StatCard } from "./StatCard";

export function StatisticsClientData() {
    const wpmTimestamps: WpmTimestamp[] = JSON.parse(localStorage.getItem('wpm-timestamp-data') ?? '[]');
    const metrics: Metrics = JSON.parse(localStorage.getItem('metrics') ?? '{}');
    const accuracy = Math.round(100 * metrics.correct / (metrics.correct + metrics.incorrect));
    const wpm = Math.round(wpmTimestamps[wpmTimestamps.length - 1]?.wpm)

    return (
        <div className="flex flex-col h-full w-full items-center md:justify-center">
            <div className="flex flex-col md:flex-row w-full justify-center items-center">
                <div className="grid grid-cols-2 gap-4 md:grid-rows-2 md:grid-cols-none text-lg opacity-40 items-center w-xs md:w-auto md:h-sm my-4">
                    <StatCard title="WPM" value={wpm} />
                    <StatCard title="Acc (%)" value={accuracy} />
                </div>
                <div className="w-xs h-48 md:h-64 md:w-1/2 my-4 md:m-4">
                    <AreaChartComponent data={wpmTimestamps} />
                </div>
            </div>
            <div className="grid grid-flow-col grid-rows-2 grid-cols-2 md:grid-cols-3 md:grid-rows-none opacity-40 w-xs gap-4 md:w-md">
                <div className="flex justify-center border rounded-xl p-2">
                    {metrics.correct + metrics.incorrect} / {metrics.correct} / {metrics.incorrect}
                </div>
                <div className="flex justify-center border rounded-xl p-2">
                    30 seconds
                </div>
                <button className=" flex justify-center border rounded-xl p-2 row-span-2 md:row-span-1 items-center focus:outline-none">
                    reset
                </button>
            </div>
        </div>
    );
}