import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
// style
import resultsStyles from "@/styles/veg-list/VegListResults.module.css";

export default function ViewOrder({ data }) {
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
    <div>
      <table className={resultsStyles["results-table"]}>
        <thead>
          <tr>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              {language === "eng" ? "Name" : "שם"}
            </th>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              {language === "eng" ? "Amount" : "כמות"}
            </th>
            <th
              className={`${resultsStyles["results-cell"]} ${resultsStyles["results-cell-th"]}`}
            >
              {language === "eng" ? "Container" : "מכולה"}
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
                  {language === "eng" ? item.englishName : item.hebrewName}
                </td>
                <td className={resultsStyles["results-cell"]}>{item.amount}</td>
                <td className={resultsStyles["results-cell"]}>
                  {renderContainerType(item.containerType)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
