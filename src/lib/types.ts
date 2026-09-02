export interface MonthlySale {
  month: string;
  sales: number;
}

export interface YearSales {
  year: number;
  data: MonthlySale[];
  total: number;
}
