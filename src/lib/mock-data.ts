import type { YearSales } from "./types";

/**
 * Mock sales data inspired by the style of public Kaggle retail/sales datasets
 * (e.g. "Superstore Sales" / "Sample Sales Data"). Monthly sales in USD.
 * Swap this out for a real API in src/app/api/sales/route.ts.
 */
export const mockSales: YearSales[] = [
  {
    year: 2024,
    data: [
      { month: "Jan", sales: 42500 },
      { month: "Feb", sales: 38900 },
      { month: "Mar", sales: 51200 },
      { month: "Apr", sales: 47800 },
      { month: "May", sales: 55600 },
      { month: "Jun", sales: 61300 },
      { month: "Jul", sales: 58400 },
      { month: "Aug", sales: 62900 },
      { month: "Sep", sales: 70100 },
      { month: "Oct", sales: 66500 },
      { month: "Nov", sales: 78300 },
      { month: "Dec", sales: 84600 },
    ],
  },
  {
    year: 2023,
    data: [
      { month: "Jan", sales: 35100 },
      { month: "Feb", sales: 32400 },
      { month: "Mar", sales: 42800 },
      { month: "Apr", sales: 40200 },
      { month: "May", sales: 46900 },
      { month: "Jun", sales: 51500 },
      { month: "Jul", sales: 48700 },
      { month: "Aug", sales: 52300 },
      { month: "Sep", sales: 58600 },
      { month: "Oct", sales: 55100 },
      { month: "Nov", sales: 64800 },
      { month: "Dec", sales: 71200 },
    ],
  },
  {
    year: 2022,
    data: [
      { month: "Jan", sales: 28800 },
      { month: "Feb", sales: 26500 },
      { month: "Mar", sales: 34900 },
      { month: "Apr", sales: 32100 },
      { month: "May", sales: 38400 },
      { month: "Jun", sales: 42700 },
      { month: "Jul", sales: 39600 },
      { month: "Aug", sales: 43500 },
      { month: "Sep", sales: 48200 },
      { month: "Oct", sales: 45100 },
      { month: "Nov", sales: 52900 },
      { month: "Dec", sales: 59300 },
    ],
  },
].map((y) => ({
  ...y,
  total: y.data.reduce((sum, m) => sum + m.sales, 0),
}));
