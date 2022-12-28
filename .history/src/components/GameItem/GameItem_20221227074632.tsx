import React from "react";
import styles from "./GameItem.module.css";
import { GameImg } from "../GameImg";
import { Button } from "../Button";

import { useAppDispatch} from "../../hooks";
import { addGame } from "../../features/addGameToCart/addGamToCartSlice";
import { Console } from "console";

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
            <Button type="primary" size="s" onClick={()=> Console.log('click')}>
              Купить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
