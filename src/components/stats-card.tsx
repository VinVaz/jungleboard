import { cn } from "../lib/utils";

type StatsCardProps = {
  headerTitle: string;
  total: number;
  currentMonthCount: number;
  lastMonthCount: number;
};

export default function StatsCard({
  headerTitle,
  total,
  currentMonthCount,
  lastMonthCount,
}: StatsCardProps) {
  const diff = currentMonthCount - lastMonthCount;
  const percentage = lastMonthCount === 0 ? 100 : (diff / lastMonthCount) * 100;

  const isNegative = diff < 0;

  return (
    <div className="border bg-background rounded-2xl p-6 flex flex-col shadow-sm">
      <h3 className="text-sm font-medium text-gray-200">{headerTitle}</h3>

      <div className="mt-4 flex items-end justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold text-gray-100">{total}</h2>

          <p
            className={cn(
              "text-sm font-medium flex items-center gap-1",
              isNegative ? "text-red-500" : "text-green-200"
            )}
          >
            {isNegative ? "↓" : "↑"} {Math.abs(Math.round(percentage))}%
            <span className="text-gray-500 ml-1">vs last month</span>
          </p>
        </div>
      </div>
    </div>
  );
}
