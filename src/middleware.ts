import { NextRequest, NextResponse } from "next/server";
import { publicRoutes } from "./utils/constants";
import { cookies } from "next/headers";
import { decodeToken, verifySession } from "./lib/session";
import { JWTPayload } from "./interface/utils.interface";

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = publicRoutes.includes(path);
  const { isAuthenticated, userId, role } = await verifySession();

  if (isProtectedRoute) {
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

  if (isPublicRoute) {
  }
  // const session =
  return NextResponse.next();
}
