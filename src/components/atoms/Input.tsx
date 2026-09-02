interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
}

/** Atom: text input */
export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  label,
}: InputProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      {label && <span className="text-slate-600">{label}</span>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-40 rounded-md border border-slate-300 px-3 py-1.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </label>
  );
}
