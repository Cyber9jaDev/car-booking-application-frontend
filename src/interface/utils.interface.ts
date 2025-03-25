import { Role } from "./auth.interface";

export type HttpMethods = "GET"|"POST"|"DELETE"|"PUT"|"PATCH";

export type JWTPayload = {
  userId: string;
  role: Role;
  iat: number;
  exp: number;
};