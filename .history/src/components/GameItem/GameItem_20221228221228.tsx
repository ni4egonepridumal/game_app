import React from "react";
import styles from "./GameItem.module.css";
import { GameImg } from "../GameImg";
import { Button } from "../Button";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { addGame, removeGame } from "../../features/addGameToCartSlice";

import IGameItemProps from "../../types/GameItem";

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
        <GameImg image={game.image} />
        <div className={styles.gameItem__details}>
          <span className={styles.gameItem__title}>{game.title}</span>
          <div className={styles.gameItem__genre}>
            {game.genres.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
          <div className={styles.gameItem__buy}>
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
