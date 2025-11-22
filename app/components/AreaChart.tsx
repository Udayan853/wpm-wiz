import { WpmTimestamp } from "@/types";
import {
    LineChart,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
    Line
} from "recharts";

export function AreaChartComponent({ data }: { data: WpmTimestamp[] }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <Line type="monotone" dataKey="wpm" dot={false} />
                <XAxis hide={false} tick={{ fontSize: "0.8rem" }} interval={4} />
                <YAxis
                    yAxisId="left"
                    dataKey="wpm"
                    hide={false}
                    label={{
                        value: "Words Per Minute",
                        angle: -90,
                        dx: -10,
                        fontSize: "0.8rem"
                    }}
                    tick={{ fontSize: "0.8rem" }}
                />
                <CartesianGrid opacity={0.05} />
            </LineChart>
        </ResponsiveContainer >
    );
}