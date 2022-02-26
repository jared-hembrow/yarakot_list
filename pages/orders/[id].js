import Back from "@/components/Back";
import Layout from "@/components/layout/Layout";
import ViewOrder from "@/components/orders/ViewOrder";
import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
// env
import { BACKEND_URL } from "@/config/index";
export default function OrderDisplayPage({ order }) {
  const { language } = useContext(LanguageContext);

  const renderDate = (timestamp) => {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(timestamp);
    return date.toLocaleString(language === "eng" ? "en-AU" : "he-IL", options);
  };
  return (
    <Layout>
      <div className="page-container">
        <div>{renderDate(order.timestamp)}</div>
        <ViewOrder data={order.list} />
        <div>
          <Back />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const orders = await fetch(`${BACKEND_URL}/api/orders/${id}`, {
    method: "GET",
  });
  const res = await orders.json();
  return {
    props: {
      order: res.order,
    },
  };
}
