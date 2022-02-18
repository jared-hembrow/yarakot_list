import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed!!" });
  }
  const itemData = JSON.parse(req.body);
  const insertData = await prisma.Vegetables.create({
    data: itemData,
  });
  res.json({ message: "success" });
};
