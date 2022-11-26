import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "changeme";
const expiresIn = process.env.JWT_EXPIRES_IN || "7d";

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, jwtSecret, { expiresIn });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, jwtSecret);

    return decoded;
  } catch (error) {
    return null;
  }
}
