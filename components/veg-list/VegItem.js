import React from "react";
// style
import styles from "@/styles/veg-list/VegItem.module.css";
export default function VegItem({ data, onChange }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles["veg-item"]}>
      <div className={styles["veg-item-title"]}>{data.title}</div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={styles["veg-item-interface"]}
      >
        <input
          className={styles["veg-item-amount"]}
          onChange={(e) => onChange("amount", data.title, e.target.value)}
          type="number"
          min={0}
          defaultValue={0}
          maxLength={3}
        />
        <select
          onChange={(e) =>
            onChange("containerType", data.title, e.target.value)
          }
        >
          <option value="box">Box</option>
          <option value="halfBox">Half Box</option>
          <option value="unit">Units</option>
        </select>
      </form>
    </div>
  );
}
