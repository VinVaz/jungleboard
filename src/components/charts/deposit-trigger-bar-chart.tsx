"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

type Trigger = { trigger: string; count: number };

const chartConfig = {
  count: { label: "Triggers", color: "#f59e0b" },
} satisfies ChartConfig;

export default function DepositTriggerBar({ data }: { data: Trigger[] }) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        Deposit Trigger Events (what preceded deposit)
      </h3>

      <ChartContainer config={chartConfig} className="min-h-[220px]">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis dataKey="trigger" />
          <YAxis />
          <Tooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="count"
            fill="var(--color-count)"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
