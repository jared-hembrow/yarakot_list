import Layout from "@/components/layout/Layout";
import React from "react";
// prisma
import { PrismaClient } from "@prisma/client";
import OrderList from "@/components/orders/OrderList";
const prisma = new PrismaClient();

export default function OrdersPage({ orders }) {
  console.log(orders);
  // const sortedOrders = orders.map((order) => {
  //   order.list = JSON.parse(order.list);
  //   return order;
  // });
  // console.log(sortedOrders);
  return (
    <Layout>
      <div className="page-container">
        <OrderList data={orders} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const orders = await prisma.Orders.findMany();

  return {
    props: {
      orders: orders,
    },
  };
}
