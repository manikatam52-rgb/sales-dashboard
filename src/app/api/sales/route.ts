import { NextResponse } from "next/server";
import { mockSales } from "@/lib/mock-data";

/**
 * API endpoint that serves the sales data.
 * The dashboard fetches from here instead of importing mock data directly,
 * so you can point it at any real API by editing this route only.
 *
 * Example: replace mockSales with a fetch to an external API, database, etc.
 */
export async function GET() {
  // Simulate network latency like a real API
  await new Promise((res) => setTimeout(res, 300));
  return NextResponse.json({ sales: mockSales });
}
