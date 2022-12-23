import React from "react";

interface GameItemOne {
    image: string;
    title: string;
    genres: GameGenre;
    video: string;
    price: number;
    id: number;
    description: string;
}

interface GameGenre {
  genres: string[];
}

interface IGameItemProps {
  game: GameItemOne;
}

export const GameItem: React.FC<IGameItemProps> = ({game}: IGameItemProps) => {
export const GameItem: React.FC<IGameItemProps> = ({game}: IGameItemProps) => {
    console.log()
  return <div>Одна игра</div>;
};
