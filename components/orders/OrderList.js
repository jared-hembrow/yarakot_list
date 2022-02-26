import React from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
// styles
import styles from "@/styles/orders/Orders.module.css";
export default function OrderList({ data }) {
  const { language } = useContext(LanguageContext);

  // navigation
  const router = useRouter();
  const renderDate = (timestamp) => {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(timestamp);
    return date.toLocaleString(language === "eng" ? "en-AU" : "he-IL", options);
    //.slice(0, 15);
  };
  const handleNav = (id) => {
    router.push(`/orders/${id}`);
  };
  return (
    <div>
      <h2>Orders</h2>
      {data.map((order) => {
        return (
          <div
            key={order.id}
            onClick={() => handleNav(order.id)}
            className={styles["orders-list-container"]}
          >
            <div className={styles["orders-list-date"]}>
              {`${renderDate(order.timestamp)}`}
            </div>
            <div className={styles["order-list-icon"]}>
              <i className="angle double right icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
