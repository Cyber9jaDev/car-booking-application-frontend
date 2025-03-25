"use server";

import { JWTPayload } from "@/interface/utils.interface";
import { encodedKey } from "@/utils/constants";
import { jwtVerify, SignJWT } from "jose";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

interface PayloadSession {
  userId: string;
  // expiresAt: number;  // why not a string?
  [key: string]: any;
}

export async function encrypt(payload: PayloadSession): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(encodedKey);
}

export async function decrypt(session: string) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, { algorithms: ["HS256"] });
    return payload;
  } catch (error) {
    throw error;
  }
}

export async function createSession(userId: string) {
  const cookie = await encrypt({ userId });
  const cookieStore = await cookies();

  cookieStore.set("access-token", cookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "lax",
  });
}

export async function getAuthUser(cookieName: string) {
  const cookieStore = await cookies();
  const cookie = cookieStore.get(cookieName)?.value;

  if (cookie) {
    const user = await decrypt(cookie);
    return user;
  }
  return null;
}

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