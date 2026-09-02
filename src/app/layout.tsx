import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Dashboard",
  description: "Sales dashboard for 2022-2024 built with Next.js 15 and Recharts",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
