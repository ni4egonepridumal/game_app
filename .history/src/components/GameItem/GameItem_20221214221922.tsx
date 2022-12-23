import React from "react";

interface GameGenre {
  genres: string[];
}

interface IGameItemProps {
  image: string;
  title: string;
  genres: GameGenre;
  video: string;
  price: number;
  id: number;
  description: string;
}

export const GameItem: React.FC<IGameItemProps> = ({id, image, title, genres, video, price, description}: IGameItemProps) => {
  return <div>Одна игра</div>;
};
