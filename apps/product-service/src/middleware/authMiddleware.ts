import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import type { CustomJwtSessionClaims } from "@repo/types";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const shouldBeUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: "You are not logged in" });
  }

  req.userId = userId;
  next();
};

export const shouldBeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = getAuth(req); // ✅ این خط اضافه شد
  const { userId, sessionClaims } = auth;

  if (!userId) {
    return res.status(401).json({ message: "You are not logged in" });
  }

  const claims = sessionClaims as CustomJwtSessionClaims;

  if (claims.metadata?.role !== "admin") {
    return res.status(403).send({ message: "Unauthorized" });
  }

  req.userId = userId;
  next();
};
