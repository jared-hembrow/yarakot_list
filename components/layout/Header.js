import { useContext } from "react";
import LanguageContext from "@/context/LanguageContext";
import Link from "next/link";
import styles from "@/styles/layout/Header.module.css";
export default function Header({ switchLanguage }) {
  const { language } = useContext(LanguageContext);

  const changeLanguage = (lng) => {
    switchLanguage(lng);
  };
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-item"]}>
        <Link href="/veg-list">
          <a className={styles["header-item-link"]}>
            {language === "eng" ? "List" : "רשימה"}
          </a>
        </Link>
      </div>
      <div
        onClick={() => changeLanguage("eng")}
        className={styles["header-item"]}
      >
        <img
          className={styles["header-flag"]}
          src="https://i.imgur.com/vBTozBD.png"
        />
      </div>
      <div
        onClick={() => changeLanguage("heb")}
        className={styles["header-item"]}
      >
        <img
          className={styles["header-flag"]}
          src="https://i.imgur.com/nLknp3F.png"
        />
      </div>
      <div className={styles["header-item"]}>
        <Link href="/orders">
          <a className={styles["header-item-link"]}>
            {language === "eng" ? "Orders" : "הזמנות"}
          </a>
        </Link>
      </div>
    </div>
  );
}
