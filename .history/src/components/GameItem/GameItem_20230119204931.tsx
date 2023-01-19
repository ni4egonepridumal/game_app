import React from "react";
import styles from "./GameItem.module.css";
import { v4 as uuidv4 } from "uuid";

import { GameImg } from "../GameImg";
import { Button } from "../Button";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { addGame, removeGame } from "../../features/addGameToCartSlice";

import IGameItemProps from "../../types/GameItem";
import { GameGenre } from "../GameGenre";
import { Link } from "react-router-dom";

export const GameItem: React.FC<IGameItemProps> = ({ game }) => {
  const dispatch = useAppDispatch();
  const itemGame = useAppSelector((state) => state.addGameToCart.gameInCart);
  const isGameInCart = itemGame.some((item) => item.id === game.id);
  const handleClick = () => {
    if (isGameInCart) {
      dispatch(removeGame(game.id));
    } else {
      dispatch(addGame(game));
    }
  };

  return (
    <>
      <div className={styles.gameItem}>
        <Link to={"GamePage"}>
          <GameImg game={game} />
        </Link>
        <div className={styles.gameItem__details}>
          <span className={styles.gameItem__title}>{game.title}</span>
          <div className={styles.gameItem__genre}>
            {game.genres.map((genre) => (
              <GameGenre key={uuidv4()} genre={genre} />
            ))}
          </div>
          <div className={styles.gameItem__buy}>
            <span className={styles.gameBuy__price}>{game.price} руб.</span>
            <Button
              type={!isGameInCart ? "primary" : "secondary"}
              size="s"
              onClick={handleClick}
            >
              {!isGameInCart ? "Добавить в корзину" : "Убрать из корзины"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
