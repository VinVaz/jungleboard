"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Bin = { label: string; count: number };

const chartConfig = {
  count: { label: "Sessions", color: "#60a5fa" },
} satisfies ChartConfig;

export default function SessionDurationHistogram({ data }: { data: Bin[] }) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[220px]">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
