import React from "react";
import { useRouter } from "next/router";

// styles
import styles from "@/styles/orders/Orders.module.css";
export default function OrderList({ data }) {
  // navigation
  const router = useRouter();
  const renderDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toString().slice(0, 15);
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
            onClick={() => handleNav(order.id)}
            className={styles["orders-list-container"]}
          >
            <div className={styles["orders-list-date"]}>
              {`${renderDate(order.timestamp)}`}
            </div>
            <div className={styles["order-list-icon"]}>
              <i className="angle double right icon" />
            </div>
            {/* <div>
              {order.list.map((item) => {
                return <div>{item.englishName}</div>;
              })}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
