"use client";

import { useEffect, useMemo, useState } from "react";
import type { YearSales, MonthlySale } from "@/lib/types";
import Card from "@/components/atoms/Card";
import StatCard from "@/components/molecules/StatCard";
import ChartTypeSwitcher, {
  type ChartType,
} from "@/components/molecules/ChartTypeSwitcher";
import ThresholdFilter from "@/components/molecules/ThresholdFilter";
import YearTabs from "@/components/molecules/YearTabs";
import SalesChart from "@/components/organisms/SalesChart";

/**
 * Organism: fetches sales from the API, wires together the
 * year tabs, threshold filter, stats and chart.
 */
export default function SalesDashboard() {
  const [sales, setSales] = useState<YearSales[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [year, setYear] = useState<number | "all">("all");
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [thresholdInput, setThresholdInput] = useState("");
  const [threshold, setThreshold] = useState(0);

  // API integration: fetch data from /api/sales (swap for a real external API)
  useEffect(() => {
    fetch("/api/sales")
      .then((res) => {
        if (!res.ok) throw new Error(`API error ${res.status}`);
        return res.json();
      })
      .then((json: { sales: YearSales[] }) => setSales(json.sales))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const years = useMemo(() => sales.map((s) => s.year), [sales]);

  const visibleMonths: MonthlySale[] = useMemo(() => {
    const sources =
      year === "all"
        ? sales.flatMap((y) => y.data.map((d) => ({ ...d, month: `${y.year} ${d.month}` })))
        : (sales.find((y) => y.year === year)?.data ?? []);
    return sources.filter((m) => m.sales >= threshold);
  }, [sales, year, threshold]);

  const selectedYear = sales.find((y) => y.year === year);
  const totalAll = sales.reduce((sum, y) => sum + y.total, 0);
  const best = [...visibleMonths].sort((a, b) => b.sales - a.sales)[0];

  const applyThreshold = () => {
    const n = Number(thresholdInput);
    setThreshold(Number.isFinite(n) && n > 0 ? n : 0);
  };

  if (loading)
    return <p className="py-20 text-center text-slate-500">Loading sales data…</p>;
  if (error)
    return <p className="py-20 text-center text-red-500">Failed to load data: {error}</p>;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <YearTabs years={years} value={year} onChange={setYear} />
        <ChartTypeSwitcher value={chartType} onChange={setChartType} />
        <ThresholdFilter
          value={thresholdInput}
          onChange={setThresholdInput}
          onClear={() => {
            setThresholdInput("");
            setThreshold(0);
          }}
        />
        <button
          onClick={applyThreshold}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          Apply
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label={year === "all" ? "Total (2022–2024)" : `Total ${year}`}
          value={`$${(selectedYear?.total ?? totalAll).toLocaleString()}`}
        />
        <StatCard
          label="Best month (filtered)"
          value={best ? `${best.month}: $${best.sales.toLocaleString()}` : "—"}
        />
        <StatCard
          label="Months shown"
          value={`${visibleMonths.length} / ${year === "all" ? 36 : 12}`}
        />
      </div>

      {/* Chart */}
      <Card
        title={year === "all" ? "Monthly sales — all years" : `Monthly sales ${year}`}
        subtitle={threshold > 0 ? `Filtered: sales ≥ $${threshold.toLocaleString()}` : undefined}
      >
        <SalesChart data={visibleMonths} type={chartType} />
      </Card>
    </div>
  );
}
