import React from "react";
import styles from "./index.module.sass";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>
          <h1 className={styles["title-name"]}>Editing</h1>
        </div>
        <div className={styles["nav"]}>
          <li className={styles["nav-item"]}>Reel</li>
          <li className={styles["nav-item"]}>Highlight</li>
          <li className={styles["nav-item"]}>Projects</li>
          <li className={styles["nav-item"]}>Contats</li>
        </div>
      </div>
    </div>
  );
};
