"use server";

import { encodedKey } from "@/utils/constants";
import { jwtVerify, SignJWT } from "jose";
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
    console.log("Failed to verify session");
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

