import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { _id: "1", name: "Apparel", image: "/images/placeholder.svg" },
    { _id: "2", name: "Shoes", image: "/images/placeholder.svg" },
  ]);
}
