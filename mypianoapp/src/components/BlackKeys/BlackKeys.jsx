import { useState } from "react";
import styles from "./blackKeys.module.css";

const BlackKeys = () => {
  const columnLeftNotes = ["DO#", "RE#"];
  const columnRightNotes = ["FA#", "SOL#", "LA#"];

  return (
    <div className={styles.blackKeys}>
      <div className={styles.columnLeft}>
        {columnLeftNotes.map((note) => (
          <button key={note} >{note}</button>
        ))}
      </div>

      <div className={styles.columnRight}>
        {columnRightNotes.map((note) => (
          <button key={note} >{note}</button>
        ))}
      </div>
    </div>
  );
};

export default BlackKeys;
