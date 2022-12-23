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
  <div className="game-item">
    <img src={game.image} />
    <div className="game-item__details">
      <span className="game-item__title">{game.title}</span>
      <div className="game-item__genre">
        {game.genres.map((genre) => (
          <p>{genre}</p>
        ))}
      </div>
      <div className="game-item__buy">
        
      </div>
    </div>
  </div>
</>;
};
