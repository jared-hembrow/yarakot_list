import { useState } from "react";
// style
import styles from "@/styles/insert-new/InsertNew.module.css";
export default function InsertNew() {
  // state Management
  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (!e.target[0].value || !e.target[1].value) {
      return setError("please fill names in both fields");
    }
    const res = await fetch("/api/insert-new-item", {
      method: "post",
      body: JSON.stringify({
        englishName: e.target[0].value,
        hebrewName: e.target[1].value,
        amount: 0,
        containerType: "box",
      }),
    }).then((result) =>
      result.ok ? setComplete(true) : setError("unseccessful")
    );
  };
  if (complete) {
    return (
      <div className="ui positive message">
        <i className="close icon" onClick={() => setComplete(false)} />
        <div className="header">Success</div>
        <p>You inserted a new item.</p>
        <div className="ui primary button" onClick={() => setComplete(false)}>
          Insert more
        </div>
      </div>
    );
  }
  return (
    <div className={styles["insert-new-container"]}>
      <div className={error ? "ui warning message" : ""}>
        {error ? error : null}
      </div>
      <form onSubmit={onSubmit} className={styles["inert-new-form"]}>
        <div className={styles["insert-new-field"]}>
          <label>English Name</label>
          <input name="englishName" type="text" />
        </div>
        <div className={styles["insert-new-field"]}>
          <label>Hebrew Name</label>
          <input name="hebrewName" type="text" />
        </div>
        <div className={styles["insert-new-field"]}>
          <button type="submit" className="ui green button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
