import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

import type { ChartConfig } from "../ui/chart";

type UserGrowthPoint = {
  day: string;
  count: number;
};

// Required config for ChartContainer
const chartConfig = {
  count: {
    label: "Users",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

export function UserGrowthChart({ data }: { data: UserGrowthPoint[] }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">User Growth</h3>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300" />
          <XAxis dataKey="day" />
          <YAxis />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="count"
            fill="var(--color-count)" // <-- uses config color
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
