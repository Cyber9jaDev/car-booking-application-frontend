"use server";

import { JWTPayload } from "@/interface/utils.interface";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const decodeToken = async (token: string) => jwtDecode(token);

export async function verifySession (){
  const cookieStore = await cookies();
  const cookie = cookieStore.get("access-token")?.value;
  const isLoggedIn = cookieStore.get("isLoggedIn")?.value;

  const session = ((isLoggedIn && cookie) ? await jwtDecode(cookie) : null) as JWTPayload;

  if(!session?.userId){
    return { isAuthenticated: false, userId: null, role: null }
  }

  return { isAuthenticated: true, userId: session?.userId, role: session?.role };
};