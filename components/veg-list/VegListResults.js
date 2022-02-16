import React from "react";
import styles from "@/styles/veg-list/VegListResults.module.css";
export default function VegListResults({ data }) {
  console.log(data);
  return (
    <div className={styles["veg-list-result-container"]}>
      <table className={styles["results-table"]}>
        <thead>
          <tr>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              Name
            </th>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              Amount
            </th>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              Container
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.title} className={styles["results-row"]}>
                <td className={styles["results-cell"]}>{item.title}</td>
                <td className={styles["results-cell"]}>{item.amount}</td>
                <td className={styles["results-cell"]}>{item.containerType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
