"use client";

import Button from "@/components/atoms/Button";

/** Molecule: year selector tabs */
export default function YearTabs({
  years,
  value,
  onChange,
}: {
  years: number[];
  value: number | "all";
  onChange: (y: number | "all") => void;
}) {
  return (
    <div className="flex gap-2">
      <Button active={value === "all"} onClick={() => onChange("all")}>
        All years
      </Button>
      {years.map((y) => (
        <Button key={y} active={value === y} onClick={() => onChange(y)}>
          {y}
        </Button>
      ))}
    </div>
  );
}
