"use client";

import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

/** Molecule: custom input letting users set their own sales threshold */
export default function ThresholdFilter({
  value,
  onChange,
  onClear,
}: {
  value: string;
  onChange: (v: string) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex items-end gap-2">
      <Input
        label="Min monthly sales ($)"
        type="number"
        value={value}
        onChange={onChange}
        placeholder="e.g. 50000"
      />
      <Button onClick={onClear}>Clear</Button>
    </div>
  );
}
