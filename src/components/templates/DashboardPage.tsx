import SalesDashboard from "@/components/organisms/SalesDashboard";

/**
 * Template: page-level layout. The dashboard page itself stays empty —
 * all the composition happens here via the atomic-structured components.
 */
export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Sales Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Monthly sales for 2022–2024 · built with Next.js 15, TypeScript,
          Tailwind CSS &amp; Recharts (atomic design structure)
        </p>
      </header>
      <SalesDashboard />
    </main>
  );
}
