"use client";

type HeatmapProps = {
  data: number[][]; // [day][hour]
  days?: string[];
};

const defaultDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function getColor(value: number, max: number) {
  if (max === 0) return "bg-gray-100";
  const t = value / max;
  if (t === 0) return "bg-transparent";
  if (t < 0.25) return "bg-emerald-100";
  if (t < 0.5) return "bg-emerald-300";
  if (t < 0.75) return "bg-emerald-500";
  return "bg-emerald-700 text-white";
}

export default function ActivityHeatmap({
  data,
  days = defaultDays,
}: HeatmapProps) {
  const max = Math.max(...data.flat(), 1);

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">
        Hourly Player Activity (Heatmap)
      </h3>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          {days.map((d) => (
            <div
              key={d}
              className="text-xs text-gray-500 h-6 flex items-center"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="overflow-auto">
          <div
            className="grid gap-1"
            style={{ gridTemplateRows: `repeat(${days.length}, 24px)` }}
          >
            {data.map((row, dayIdx) => (
              <div key={dayIdx} className="flex gap-1">
                {row.map((val, hr) => (
                  <div
                    key={hr}
                    title={`${hr}:00 — ${val} sessions`}
                    className={`w-5 h-6 rounded-sm ${getColor(val, max)}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
            <div className="w-5 h-3 bg-emerald-100 rounded-sm" /> Low
            <div className="w-5 h-3 bg-emerald-300 rounded-sm ml-2" /> Moderate
            <div className="w-5 h-3 bg-emerald-500 rounded-sm ml-2" /> High
            <div className="w-5 h-3 bg-emerald-700 rounded-sm ml-2 text-white" />{" "}
            Peak
          </div>
        </div>
      </div>
    </div>
  );
}
