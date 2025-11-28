// components/insights/RetentionPredictors.tsx
"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Predictor = { name: string; importance: number };

const chartConfig = {
  importance: { label: "Importance", color: "#ef4444" },
} satisfies ChartConfig;

export default function RetentionPredictors({ data }: { data: Predictor[] }) {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="importance"
          fill={chartConfig.importance.color}
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
