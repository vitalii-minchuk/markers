import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import omit from "lodash.omit";

import { signJwt } from "../../utils/jwt-sign-verify";
import { findUserByEmail } from "../user/user.service";
import { LoginBodyType } from "./auth.schema";

export async function loginHandler(
  req: Request<{}, {}, LoginBodyType>,
  res: Response
) {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user || !user.comparePassword(password)) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send("Invalid email or password");
  }

  const payload = omit(user.toJSON(), ["password", "__v"]);
  const jwt = signJwt(payload);

  res.cookie("accessToken", jwt, {
    maxAge: 15 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    domain: "localhost",
    secure: false,
  });

  return res.status(StatusCodes.OK).send(jwt);
}
