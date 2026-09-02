# sales-dashboard
Sales Dashboard using Next.js 15, Recharts, TypeScript, and Atomic Design

## What this project does

- Shows **monthly sales for 2024, 2023 and 2022** (mock data in the style of public Kaggle retail/sales datasets).
- Fetches data through an **API route** (`/api/sales`) instead of importing mock data directly into components — swap the contents of `src/app/api/sales/route.ts` to plug in a real external API or database.
- Lets users switch between **Bar, Line and Pie** charts.
- Has a **custom filter input** where the user sets a minimum monthly sales threshold, and the chart + KPIs update live.
- Provides **year tabs** (all years / per year) and KPI stat cards (total, best month, months shown).

## Atomic structure

```
src/components/
├── atoms/          # smallest units: Button, Card, Input
├── molecules/      # combinations of atoms: StatCard, ChartTypeSwitcher,
│                   # ThresholdFilter, YearTabs
├── organisms/      # self-contained sections: SalesChart, SalesDashboard
└── templates/      # page-level layout: DashboardPage
```

The `src/app/page.tsx` (the dashboard page) stays empty and just renders the template — all composition happens in the components.

## Project structure

```
src/
├── app/
│   ├── api/sales/route.ts   # API endpoint serving sales data
│   ├── layout.tsx           # root layout
│   ├── page.tsx             # dashboard page (empty shell)
│   └── globals.css          # Tailwind entry
├── components/              # atomic components (see above)
└── lib/
    ├── mock-data.ts         # mock sales 2022–2024
    └── types.ts             # shared TypeScript types
```

## Setup

Requirements: **Node.js 18.18+** (Node 20 recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

## Enhancements included

| Enhancement | Where |
|---|---|
| Custom filter input (sales threshold) | `src/components/molecules/ThresholdFilter.tsx` |
| API integration (data fetched, not imported) | `src/app/api/sales/route.ts` + `fetch` in `SalesDashboard.tsx` |
| Multiple chart types (bar / line / pie) | `src/components/organisms/SalesChart.tsx` |

## Data source

The mock numbers are inspired by the structure of public Kaggle sales datasets
(e.g. "Superstore Sales" / "Sample Sales Data" on [kaggle.com](https://www.kaggle.com/datasets)).
To use a real dataset, replace the return value of `GET` in `src/app/api/sales/route.ts`
with a fetch to your API, or a CSV/DB loader — no component changes needed.
