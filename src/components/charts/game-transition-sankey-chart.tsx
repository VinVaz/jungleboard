"use client";

import { Sankey, Tooltip } from "recharts";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";
import type { ChartConfig } from "../ui/chart";

const chartConfig = {
  flow: { label: "Players", color: "#a78bfa" },
} satisfies ChartConfig;

type Node = { name: string };
type Link = { source: string; target: string; value: number };

export default function GameTransitionSankey({
  nodes,
  links,
}: {
  nodes: Node[];
  links: Link[];
}) {
  // map string names to indices
  const nodeIndexMap = nodes.reduce((acc, node, idx) => {
    acc[node.name] = idx;
    return acc;
  }, {} as Record<string, number>);

  const mappedLinks = links.map((link) => ({
    source: nodeIndexMap[link.source as string], // string → index
    target: nodeIndexMap[link.target as string],
    value: link.value,
  }));

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Game Transition Flow</h3>

      <ChartContainer config={chartConfig} className="min-h-[260px]">
        <>
          <Sankey
            data={{ nodes, links: mappedLinks }}
            nodePadding={10}
            nodeWidth={12}
          />
          <Tooltip content={<ChartTooltipContent />} />
        </>
      </ChartContainer>
    </div>
  );
}
