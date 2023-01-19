import React from "react";
import { Link } from "react-router-dom";
import styles from "./GameImg.module.css";

// import GameImgProps from "../../types/GameImg";
import IGameItemProps from "../../types/GameItem";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {choiseCurrentGame} from "../../features/currentGameSlice"

export const GameImg: React.FC<IGameItemProps> = ({ game }) => {
  const currentGame = useAppSelector(state=>state)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(choiseCurrentGame(game))
  }

  return (
    <Link to={"GamePage"}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${game.image})` }}
        onClick={()=> handleClick()}
      />
    </Link>
  );
};
