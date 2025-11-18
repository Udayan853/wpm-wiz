import { WpmTimestamp } from "@/types";
import { AreaChartComponent } from "./AreaChart";

export function StatisticsClientData() {
    const wpmTimestamps: WpmTimestamp[] = JSON.parse(localStorage.getItem('wpm-timestamp-data') ?? '[]');

    return (
        <div className="flex flex-col md:flex-row h-full min-w-screen items-center justify-center">
            <div className="flex flex-col text-xl opacity-40">
                <div className="border m-4 rounded-xl flex flex-col items-center p-2">
                    <div>
                        WPM
                    </div>
                    <div>
                        {Math.round(wpmTimestamps[wpmTimestamps.length - 1]?.wpm ?? 0)}
                    </div>
                </div>
                <div className="border m-4 rounded-xl flex flex-col items-center p-2">
                    <div>
                        Acc
                    </div>
                    <div>
                        Placeholder
                    </div>
                </div>
            </div>
            <div className="w-7/8 h-1/4 md:w-1/2 mt-4">
                <AreaChartComponent data={wpmTimestamps} />
            </div>
        </div>
    );
}