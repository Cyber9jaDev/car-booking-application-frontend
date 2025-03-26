import { NextRequest, NextResponse } from "next/server";
import { protectedRoutes, publicRoutes } from "./utils/constants";
import { verifySession } from "./lib/session";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const { isAuthenticated, role } = await verifySession();

  if (protectedRoutes.includes(path)) {
    // You are stupid for trying to access this route if ypou are not authenticated
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if (isAuthenticated) {
      // Admin only routes
      if (path.startsWith("/admin") && role !== "ADMIN") {
        return NextResponse.redirect(new URL("/", request.nextUrl));
      }

      // Passengers should access routes not related to admin
      if (!path.startsWith("/admin") && role !== "PASSENGER") {
        return NextResponse.redirect(new URL("/", request.nextUrl));
      }
    }

    // Admin Related Routes only
    // You are just a passenger not an admin
    if (isAuthenticated && role === "PASSENGER") {
    }
  }

  if (publicRoutes.includes(path)) {
    if (path === "/") NextResponse.next();

    if (isAuthenticated && (path === "/login" || path === "/signup")) {
      return NextResponse.redirect(new URL("/", request.nextUrl));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}
