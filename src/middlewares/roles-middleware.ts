import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get user role from cookie/token (adjust based on your auth implementation)
  const userRole = request.cookies.get("userRole")?.value; // or extract from JWT token

  // Define protected routes
  const companyRoutes = pathname.startsWith("/company");
  const candidateRoutes = pathname.startsWith("/candidate");

  // Allow access to public routes (login, signup, etc.)
  if (!companyRoutes && !candidateRoutes) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!userRole) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Block candidates from accessing company routes
  if (companyRoutes && userRole === "candidate") {
    return NextResponse.redirect(new URL("/candidate/dashboard", request.url));
  }

  // Block companies from accessing candidate routes
  if (candidateRoutes && userRole === "company") {
    return NextResponse.redirect(new URL("/company/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/company/:path*", "/candidate/:path*"],
};
