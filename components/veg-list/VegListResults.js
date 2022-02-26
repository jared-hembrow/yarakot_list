import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import styles from "@/styles/veg-list/VegListResults.module.css";
export default function VegListResults({ data, onConfirm }) {
  const { language } = useContext(LanguageContext);
  const renderContainerType = (containerType) => {
    if (language == "eng") {
      return containerType;
    } else {
      if (containerType === "Box") return "קופסא";
      else if (containerType === "Half Box") return "חצי קופסה";
      else if (containerType === "Unit") return "יחידה";
      else return containerType;
    }
  };
  return (
    <div className={styles["veg-list-result-container"]}>
      <table className={styles["results-table"]}>
        <thead>
          <tr>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              {language === "eng" ? "Name" : "שם"}
            </th>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              {language === "eng" ? "Amount" : "כמות"}
            </th>
            <th
              className={`${styles["results-cell"]} ${styles["results-cell-th"]}`}
            >
              {language === "eng" ? "Container" : "מכולה"}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.englishName} className={styles["results-row"]}>
                <td className={styles["results-cell"]}>
                  {language === "eng" ? item.englishName : item.hebrewName}
                </td>
                <td className={styles["results-cell"]}>{item.amount}</td>
                <td className={styles["results-cell"]}>
                  {renderContainerType(item.containerType)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["results-confirm"]}>
        <button className="ui green button" onClick={() => onConfirm(data)}>
          {language === "eng" ? "Confirm" : "לאשר"}
        </button>
      </div>
    </div>
  );
}
