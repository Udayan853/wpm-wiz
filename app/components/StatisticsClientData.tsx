import { Metrics, WpmTimestamp } from "@/types";
import { AreaChartComponent } from "./AreaChart";
import { StatCard } from "./StatCard";
import { ResetButton } from "./ResetButton";

export function StatisticsClientData() {
    const wpmTimestamps: WpmTimestamp[] = JSON.parse(localStorage.getItem('wpm-timestamp-data') ?? '[]');
    const metrics: Metrics = JSON.parse(localStorage.getItem('metrics') ?? '{}');
    const accuracy = Math.round(100 * metrics.correct / (metrics.correct + metrics.incorrect));
    const rawWpm = Math.round(wpmTimestamps[wpmTimestamps.length - 1]?.wpm);
    const wpm = Math.round(2 * metrics.correct / 5);

    return (
        <div className="flex flex-col h-full w-full items-center md:justify-center">
            <div className="flex flex-col md:flex-row w-full justify-center items-center">
                <div className="grid grid-cols-2 gap-5 md:grid-rows-2 md:grid-cols-none text-lg opacity-40 items-center w-xs md:w-auto md:h-sm my-4">
                    <StatCard title="WPM" value={wpm} />
                    <StatCard title="Acc (%)" value={accuracy} />
                </div>
                <div className="w-xs h-48 md:h-64 md:w-1/2 my-2 md:m-4">
                    <AreaChartComponent data={wpmTimestamps} />
                </div>
            </div>
            <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none opacity-40 w-3xs gap-5 md:w-md">
                <StatCard title="Raw WPM" value={rawWpm} />
                <StatCard title="Time(s)" value={30} />
                <div className="flex justify-center border items-center rounded-xl p-4">
                    {metrics.correct + metrics.incorrect} / {metrics.correct} / {metrics.incorrect}
                </div>
                <div className="flex justify-center md:col-span-3 rounded-xl p-2 items-end md:items-center">
                    <ResetButton />
                </div>
            </div>
        </div>
    );
}