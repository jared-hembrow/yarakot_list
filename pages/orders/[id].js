import Back from "@/components/Back";
import Layout from "@/components/layout/Layout";
import ViewOrder from "@/components/orders/ViewOrder";
// prisma
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default function OrderDisplayPage({ order }) {
  console.log(order);
  const renderDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toString().slice(0, 15);
  };
  return (
    <Layout>
      <div className="page-container">
        <div>{new Date(order.timestamp).toString().slice(0, 21)}</div>
        <ViewOrder data={order.list} />
        <div>
          <Back />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  console.log(id);
  const order = await prisma.Orders.findUnique({
    where: {
      id: id,
    },
  });
  order.list = JSON.parse(order.list);
  return {
    props: {
      order: order,
    },
  };
}
