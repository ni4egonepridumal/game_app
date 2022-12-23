import React from "react";

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
}: IGameItemProps) => {
  return <div>ВЕрнуть логику из GAME</div>;
};
