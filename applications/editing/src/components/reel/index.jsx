import React, { useEffect } from "react";
import Player from "@vimeo/player";
import { ReelConfig } from "config/projects";

import styles from "./index.module.sass";

export const Reel = () => {
  const { url } = ReelConfig;

  useEffect(() => {
    const player = new Player("reel-preview", {
      width: 800,
    });
    player.on("play", function () {
      console.log("played the player 2.0 video!");
    });
  }, []);

  return (
    <div className={styles["reel"]}>
      <h2 className={styles["title"]}>Editing Reel</h2>
      <div className={styles["video-container"]}>
        <div data-vimeo-url={url} id="reel-preview"></div>
      </div>
    </div>
  );
};
