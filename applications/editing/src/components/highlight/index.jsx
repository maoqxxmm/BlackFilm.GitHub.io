import React from "react";
import { HighlightsConfig } from "config/projects";
import styles from "./index.module.sass";

export const Highlight = () => {
  const renderWork = (work) => {
    return (
      <div key={work.title} className={styles["work-card"]}>
        <img src={work.thumbnail} alt="" />
      </div>
    );
  };

  return (
    <div className={styles["highlight"]}>
      <h2 className={styles["title"]}>Highlight</h2>
      <div className={styles["works"]}>
        {HighlightsConfig.map((work) => renderWork(work))}
      </div>
    </div>
  );
};
