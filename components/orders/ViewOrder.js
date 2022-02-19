import React from "react";
// style
import resultsStyles from "@/styles/veg-list/VegListResults.module.css";

export default function ViewOrder({ data }) {
  return (
    <div>
      <table className={resultsStyles["results-table"]}>
        <thead>
          <tr>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              Name
            </th>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              Amount
            </th>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              Container
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr
                key={item.englishName}
                className={resultsStyles["results-row"]}
              >
                <td className={resultsStyles["results-cell"]}>
                  {item.englishName}
                </td>
                <td className={resultsStyles["results-cell"]}>{item.amount}</td>
                <td className={resultsStyles["results-cell"]}>
                  {item.containerType}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
