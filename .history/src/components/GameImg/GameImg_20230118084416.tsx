import React from "react";
import { Link } from "react-router-dom";
import styles from "./GameImg.module.css";

//import GameImgProps from "../../types/GameImg";
import IGameItemProps from "../../types/GameItem";

export const GameImg: React.FC<IGameItemProps> = ({ game }) => {
  console.log(game.id)
  return (
    <Link to={"GamePage"}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${game.image})` }}
        onClick={()=> console.log("click")}
      />
    </Link>
  );
};
