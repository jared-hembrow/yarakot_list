import { useState } from "react";

// components
import VegItem from "@/components/veg-list/VegItem";
// style
import styles from "@/styles/veg-list/VegList.module.css";

export default function VegList({ onSubmit, vegetablesList }) {
  // state management
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState(vegetablesList);

  const onChange = (type, title, value) => {
    const idx = list.findIndex((item) => item.englishName === title);
    let changedList = list;
    switch (type) {
      case "amount":
        changedList[idx].amount = parseInt(value);
        setList(changedList);
        return update ? setUpdate(false) : setUpdate(true);
      case "containerType":
        changedList[idx].containerType = value;
        setList(changedList);
        return update ? setUpdate(false) : setUpdate(true);
      default:
        return update ? setUpdate(false) : setUpdate(true);
    }
  };

  return (
    <div className={styles["veg-list-container"]}>
      <div className={styles["item-list"]}>
        {list.map((item) => {
          return (
            <VegItem key={item.englishName} data={item} onChange={onChange} />
          );
        })}
      </div>
      <div className={styles["veg-list-submit"]}>
        <button onClick={() => onSubmit(list)} className="ui green button">
          Submit
        </button>
      </div>
    </div>
  );
}
