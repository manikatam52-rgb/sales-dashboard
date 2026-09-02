interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

/** Atom: content container */
export default function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      {title && (
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
          {subtitle && (
            <p className="text-xs text-slate-400">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
