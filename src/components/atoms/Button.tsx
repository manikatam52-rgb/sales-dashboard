"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

/** Atom: small interactive button */
export default function Button({ children, onClick, active }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white shadow"
          : "bg-white text-slate-700 hover:bg-slate-200"
      }`}
    >
      {children}
    </button>
  );
}
