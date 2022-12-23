import React from "react";
import styles from "./GameItem.module.css";

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

export const GameItem: React.FC<IGameItemProps> = ({
  game,
}) => {
  return  <>
  <div className={styles.gameItem}>
    <img src={game.image} />
    <div className={styles.gameItem__details}>
      <span className={styles.gameItem__title}>{game.title}</span>
      <div className={styles.gameItem__genre}>
        {game.genres.map((genre) => (
          <p>{genre}</p>
        ))}
      </div>
      <div className={styles.gameItem__buy}>
        
      </div>
    </div>
  </div>
</>;
};
