"use client";

import Button from "@/components/atoms/Button";

export type ChartType = "bar" | "line" | "pie";

const types: { key: ChartType; label: string }[] = [
  { key: "bar", label: "Bar" },
  { key: "line", label: "Line" },
  { key: "pie", label: "Pie" },
];

/** Molecule: buttons to switch between chart types */
export default function ChartTypeSwitcher({
  value,
  onChange,
}: {
  value: ChartType;
  onChange: (t: ChartType) => void;
}) {
  return (
    <div className="flex gap-2">
      {types.map((t) => (
        <Button key={t.key} active={value === t.key} onClick={() => onChange(t.key)}>
          {t.label}
        </Button>
      ))}
    </div>
  );
}
