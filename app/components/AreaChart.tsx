import { WpmTimestamp } from "@/types";
import {
    AreaChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Line,
    Area
} from "recharts";

export function AreaChartComponent({ data }: { data: WpmTimestamp[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                className="text-primary-1 opacity-75"
                data={data}
                margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
            >
                <Line type="monotone" dataKey="wpm" dot={false} strokeWidth={2} stroke="currentColor" />
                <Area fillOpacity={0.15} fill="currentColor" type="monotone" dataKey="wpm" dot={false} />
                <XAxis tick={{ fontSize: "0.8rem", stroke: "currentColor" }} interval={4} />
                <YAxis
                    yAxisId="left"
                    dataKey="wpm"
                    label={{
                        value: "Words Per Minute",
                        angle: -90,
                        dx: -10,
                        fontSize: "0.85rem",
                        fill: "currentColor"
                    }}
                    tick={{ fontSize: "0.8rem", stroke: "currentColor" }}
                />
                <CartesianGrid opacity={0.15} />
            </AreaChart>
        </ResponsiveContainer >
    );
}