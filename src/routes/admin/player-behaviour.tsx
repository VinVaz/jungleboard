import DepositTriggerBar from "../../components/charts/deposit-trigger-bar-chart";
import RetentionPredictors from "../../components/charts/retention-predictors";
import SessionDurationHistogram from "../../components/charts/session-duration-histogram-chart";
import SpendingCurve from "../../components/charts/spending-curve-chart";
import { Header } from "../../components/header";
import KPIsRow from "../../components/kpi-row";

const sessionDurations = [
  { label: "0-5 min", count: 120 },
  { label: "5-10 min", count: 92 },
  { label: "10-20 min", count: 76 },
  { label: "20-40 min", count: 40 },
  { label: "40-60 min", count: 18 },
];

const depositTriggers = [
  { trigger: "Big Win", count: 58 },
  { trigger: "Loss Streak", count: 41 },
  { trigger: "Bonus Expired", count: 26 },
  { trigger: "Reached VIP", count: 14 },
];

const spendingCurve = [
  { date: "1", amount: 42 },
  { date: "2", amount: 46 },
  { date: "3", amount: 38 },
  { date: "4", amount: 55 },
  { date: "5", amount: 60 },
  { date: "6", amount: 48 },
  { date: "7", amount: 70 },
];

const retentionPredictors = [
  { name: "Avg Session Time", importance: 0.76 },
  { name: "Daily Bets", importance: 0.63 },
  { name: "Deposit Frequency", importance: 0.58 },
  { name: "Game Diversity", importance: 0.44 },
];

export default function PlayerBehavior() {
  return (
    <main className="wrapper py-8 flex flex-col gap-10">
      <Header
        title="CRM Analytics"
        description="Understand player behavior, spending patterns and retention drivers."
      />

      {/* KPIs */}
      <section>
        <KPIsRow />
      </section>

      {/* Engagement + Deposit Behavior */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            Session Duration Distribution
          </h3>
          <SessionDurationHistogram data={sessionDurations} />
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Deposit Triggers</h3>
          <DepositTriggerBar data={depositTriggers} />
        </div>
      </section>

      {/* Spending & Retention Predictions */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Spending Curve</h3>
          <SpendingCurve data={spendingCurve} />
        </div>

        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Retention Predictors</h3>
          <RetentionPredictors data={retentionPredictors} />
        </div>
      </section>
    </main>
  );
}
