import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed!!" });
  }
  const deleteUsers = await prisma.User.deleteMany({});
  const user = await prisma.User.create({
    data: {
      name: "admin",
      password: "12345",
    },
  });
  res.json({ message: "success" });
};
