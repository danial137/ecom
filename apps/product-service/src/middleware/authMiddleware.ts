import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";

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
  const { userId } = getAuth(req); // ✅ تابع را اجرا کن و خروجی‌اش را بگیر

  if (!userId) {
    return res.status(401).json({ message: "You are not logged in" });
  }

  req.userId = userId; // ✅ از همون متغیر userId استفاده کن
  next(); // ✅ مهم: باید next() رو صدا بزنی
};
