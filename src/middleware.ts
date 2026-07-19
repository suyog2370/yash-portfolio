import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Keep design-direction preview pages (/preview/*) usable during local
 * development and code review, but 404 them in the deployed production
 * build so only the promoted Hyperscale home ("/") is publicly reachable.
 */
export function middleware(req: NextRequest) {
  if (
    process.env.NODE_ENV === "production" &&
    req.nextUrl.pathname.startsWith("/preview")
  ) {
    return new NextResponse(null, { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/preview/:path*",
};
