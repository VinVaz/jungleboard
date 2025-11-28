"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Point = { date: string; avg: number; p90: number; p10: number };

const chartConfig = {
  avg: { label: "Avg Bet", color: "#60a5fa" },
} satisfies ChartConfig;

export default function BetSizeVariability({ data }: { data: Point[] }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Bet Size Variability</h3>

      <ChartContainer config={chartConfig} className="min-h-[220px]">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="avg"
            stroke="var(--color-avg)"
            fill="var(--color-avg)"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
