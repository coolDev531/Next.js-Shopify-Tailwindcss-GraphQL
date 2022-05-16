import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const startTime = Date.now();

  console.log(`${Date.now() - startTime}ms`);

  return NextResponse.next();
}
