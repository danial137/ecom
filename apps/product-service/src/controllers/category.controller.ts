import { Request, Response } from "express";
import { prisma, Prisma } from "@repo/product-db";

export const createCategory = async (req: Request, res: Response) => {
    const data: Prisma.CategoryCreateInput = req.body;
    
  const category = await prisma.category.create({ data });
  res.status(201).json(category);
};
export const updateCategory = async (req: Request, res: Response) => {};
export const deletepCategory = async (req: Request, res: Response) => {};
export const getCategories = async (req: Request, res: Response) => {};
