import React from "react";
import styles from "./GameItem.module.css";
import { GameImg } from "../GameImg";
import { Button } from "../Button";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { addGame, removeGame } from "../../features/addGameToCartSlice";

interface IGameItem {
  image: string;
  title: string;
  genres: string[];
  video: string;
  price: number;
  id: number;
  description: string;
}

interface IGameItemProps {
  game: IGameItem;
}

export const GameItem: React.FC<IGameItemProps> = ({ game }) => {
  const dispatch = useAppDispatch();
  const itemGame = useAppSelector((state) => state.addGameToCart.gameInCart);
  //console.log(itemGame);
  const isGameInCart = itemGame.some((item) => item.id === game.id);
  console.log(isGameInCart);
  const handleClick = () => {
    if (!isGameInCart) {
      console.log("добавил игру")
      dispatch(addGame(game));
    } else {
      console.log("удалил игру")
      dispatch(removeGame(game.id));
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
            <Button type="primary" size="s" onClick={handleClick}>
              Купить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
