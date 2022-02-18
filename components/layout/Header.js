import Link from "next/link";
import styles from "@/styles/layout/Header.module.css";
export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-item"]}>
        <Link href="/veg-list">
          <a className={styles["header-item-link"]}>List</a>
        </Link>
      </div>
      <div className={styles["header-item"]}></div>
      <div className={styles["header-item"]}>
        <Link href="/orders">
          <a className={styles["header-item-link"]}>Orders</a>
        </Link>
      </div>
    </div>
  );
}
