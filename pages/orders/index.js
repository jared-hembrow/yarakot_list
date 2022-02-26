import Layout from "@/components/layout/Layout";
import React from "react";
import OrderList from "@/components/orders/OrderList";
// env
import { BACKEND_URL } from "@/config/index";
export default function OrdersPage({ orders }) {
  return (
    <Layout>
      <div className="page-container">
        <OrderList data={orders} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // const orders = await prisma.Orders.findMany();
  const orders = await fetch(`${BACKEND_URL}/api/orders`, {
    method: "GET",
  });
  const res = await orders.json();
  return {
    props: {
      orders: res.orders,
    },
  };
}
