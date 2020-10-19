import React from "react";
import styles from "./index.module.sass";

export const Section = (props) => {
  return <div className={styles["section"]}>{props.children}</div>;
};
