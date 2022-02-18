import React from "react";
import Link from "next/link";
// style
import styles from "@/styles/layout/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <Link href="/insert-vegetable">
        <a>Insert</a>
      </Link>
    </div>
  );
}
