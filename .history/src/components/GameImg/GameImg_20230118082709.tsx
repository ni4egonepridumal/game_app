import React from "react";
import { Link } from "react-router-dom";
import styles from "./GameImg.module.css";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setCurrentGame } from "../../features/gameItemSlice";

import GameImgProps from "../../types/GameImg";

export const GameImg: React.FC<GameImgProps> = ( game ) => {
  console.log(game)
  const dispatch = useAppDispatch()
  const choiswGame = () => {
dispatch(setCurrentGame(game))
  }
  return (
    <Link to={"GamePage"}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${game.image})` }}
        onClick={choiswGame(game)}
      />
    </Link>
  );
};
