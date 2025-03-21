// "use server";

import { encodedKey } from "@/utils/constants";
import { jwtVerify, SignJWT } from "jose";
import { cookies, headers } from "next/headers";

interface PayloadSession {
  userId: string;
  expiresAt: Date;
  [key: string]: any;
}

export async function encrypt(payload: PayloadSession): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
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
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getAuthUser(cookieName: string) {
  const cookieStore = await cookies();
  const session = cookieStore.get(cookieName)?.value;

  if (session) {
    const user = await decrypt(session);
    return user;
  }
  return null;
}

