const jwtKey = process.env.NEXT_PRIVATE_JWT_SECRET;
export const encodedKey = new TextEncoder().encode(jwtKey);