import Image from "next/image";
import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
// style
import styles from "@/styles/veg-list/VegItem.module.css";
export default function VegItem({ data, onChange }) {
  const { language } = useContext(LanguageContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div key={data.englishName} className={styles["veg-item"]}>
      <div>
        <Image src={data.url} height={200} width={200} />
      </div>
      <div className={styles["veg-item-title"]}>
        {language === "eng" ? data.englishName : data.hebrewName}
      </div>
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
          <option value="Box">{language === "eng" ? "Box" : "קופסא"}</option>
          <option value="Half Box">
            {language === "eng" ? "Half box" : "חצי קופסה"}
          </option>
          <option value="Unit">{language === "eng" ? "Unit" : "יחידה"}</option>
        </select>
      </form>
    </div>
  );
}
