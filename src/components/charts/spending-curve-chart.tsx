"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Point = { date: string; amount: number };

const chartConfig = {
  amount: { label: "Amount", color: "#34d399" },
} satisfies ChartConfig;

export default function SpendingCurve({ data }: { data: Point[] }) {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke={chartConfig.amount.color}
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
