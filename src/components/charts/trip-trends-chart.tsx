import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Trend = {
  travelStyle: string;
  count: number;
};

// Required by ChartContainer
const chartConfig = {
  count: {
    label: "Trips",
    color: "#10b981",
  },
} satisfies ChartConfig;

export function TripTrendsChart({ data }: { data: Trend[] }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Trip Trends</h3>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />

          <XAxis dataKey="travelStyle" />
          <YAxis />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="count"
            fill="var(--color-count)" // required for shadcn color binding
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
