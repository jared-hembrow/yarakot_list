import React from "react";
import Image from "next/image";
// style
import styles from "@/styles/veg-list/VegItem.module.css";
export default function VegItem({ data, onChange }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div key={data.englishName} className={styles["veg-item"]}>
      <div>
        <Image src={data.url} height={200} width={200} />
      </div>
      <div className={styles["veg-item-title"]}>{data.englishName}</div>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={styles["veg-item-interface"]}
      >
        <input
          className={styles["veg-item-amount"]}
          onChange={(e) => onChange("amount", data.englishName, e.target.value)}
          type="number"
          min={0}
          defaultValue={0}
          maxLength={3}
        />
        <select
          onChange={(e) =>
            onChange("containerType", data.englishName, e.target.value)
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
