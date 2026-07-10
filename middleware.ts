import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.includes("burjj-almubdia.com")) {
    return NextResponse.redirect(
      `https://burj-almubdia.com${request.nextUrl.pathname}${request.nextUrl.search}`,
      301
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
