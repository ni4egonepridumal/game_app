import React from "react";
import styles from "./GameImg.module.css";

import IGameItemProps from "../../types/GameItem";
import { useAppDispatch } from "../../hooks";
import { choiseCurrentGame } from "../../features/currentGameSlice";

export const GameImg: React.FC<IGameItemProps> = ({ game }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(choiseCurrentGame(game));
  };

  return (
    <div
      className={styles.image}
      style={{ backgroundImage: `url(${game.image})` }}
      onClick={() => handleClick()}
    />
  );
};
