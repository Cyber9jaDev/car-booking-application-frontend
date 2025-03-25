import "server-only";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { cache } from "react";
import { JWTPayload } from "@/interface/utils.interface";
import { redirect } from "next/navigation";

export const verifySession = cache(async () => {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("access-token")?.value;
  const isLoggedIn = cookieStore.get("isLoggedIn")?.value;

  const session = ((isLoggedIn && cookie) ? await jwtDecode(cookie) : null) as JWTPayload;

  if (!session?.userId) {
    return ;
  }

  return { isAuthenticated: true, userId: session.userId, role: session.role };
});
