"use client";

import {
  BarChart,
  LineChart,
  PieChart,
  Pie,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";
import type { MonthlySale } from "@/lib/types";
import type { ChartType } from "@/components/molecules/ChartTypeSwitcher";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"];

/** Organism: renders the same data as a bar, line or pie chart (Recharts) */
export default function SalesChart({
  data,
  type,
}: {
  data: MonthlySale[];
  type: ChartType;
}) {
  if (data.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center text-sm text-slate-400">
        No months match the current threshold.
      </div>
    );
  }

  if (type === "pie") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="month"
            cx="50%"
            cy="50%"
            outerRadius={110}
            label={(entry: { month?: string }) => entry.month}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
          <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
        <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
