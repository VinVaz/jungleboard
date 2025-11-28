"use client";

import KPICard from "./kpi-card";

export default function KPIsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      <KPICard label="Active Players (24h)" value="18,420" />
      <KPICard label="New Players (24h)" value="1,412" />
      <KPICard label="Returning Rate" value="42%" />
      <KPICard label="Avg Session (min)" value="28" hint="minutes" />
      <KPICard label="Avg Deposit (BRL)" value="R$ 142.30" />
      <KPICard label="Churn Risk (high)" value="6.2%" />
    </div>
  );
}
