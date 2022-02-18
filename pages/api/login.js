import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed!!" });
  }
  console.log(typeof req.body);
  const password = JSON.parse(req.body);
  const checkPW = await prisma.User.findFirst({
    where: {
      password: password,
    },
  });
  if (checkPW) {
    return res.status(200).json({ message: "success" });
  } else {
    return res.status(400).json({ message: "Incorrect Password" });
  }
};
