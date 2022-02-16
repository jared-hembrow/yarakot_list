import { useState } from "react";

// components
import VegItem from "@/components/veg-list/VegItem";
// style
import styles from "@/styles/veg-list/VegList.module.css";

export default function VegList({ onSubmit }) {
  // state management
  const [update, setUpdate] = useState(false);
  const [list, setList] = useState([
    { title: "cucumber", amount: 0, containerType: "box" },
    { title: "tomato", amount: 0, containerType: "box" },
    { title: "carrot", amount: 0, containerType: "box" },
  ]);

  const onChange = (type, title, value) => {
    const idx = list.findIndex((item) => item.title === title);
    let changedList = list;
    switch (type) {
      case "amount":
        changedList[idx].amount = parseInt(value);
      case "containerType":
        changedList[idx].containerType = value;
    }
    setList(changedList);
    update ? setUpdate(false) : setUpdate(true);
  };

  return (
    <div className={styles["veg-list-container"]}>
      <div className={styles["item-list"]}>
        {list.map((item) => {
          return <VegItem data={item} onChange={onChange} />;
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

const testList = [
  { name: "cucumber", amount: 0 },
  { name: "tomato", amount: 0 },
  { name: "carrot", amount: 0 },
];
