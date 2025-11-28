"use client";

function KPICard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col justify-between">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-3 flex items-baseline gap-3">
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        {hint && <div className="text-sm text-gray-400">{hint}</div>}
      </div>
    </div>
  );
}

export default KPICard;
