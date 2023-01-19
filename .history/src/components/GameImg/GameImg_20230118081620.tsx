import React from "react";
import { Link } from "react-router-dom";
import styles from "./GameImg.module.css";

import GameImgProps from "../../types/GameImg";

export const GameImg: React.FC<GameImgProps> = ({ game }) => {
  return (
    <Link to={"GamePage"}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${game.image})` }}
        onClick={()=> console.log('click')}
      />
    </Link>
  );
};
