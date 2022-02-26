import prisma from "@/config/client";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed!!" });
  }
  const orderData = JSON.parse(req.body);
  const date = new Date().getTime();
  const insertData = await prisma.Orders.create({
    data: { list: orderData.list, timestamp: date },
  });
  res.json({ message: "success" });
};
