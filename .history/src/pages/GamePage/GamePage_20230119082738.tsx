import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

export const GamePage = () => {
  const { currentGame } = useAppSelector((state) => state);
 // отобразить все элементы из объекта с версткой
  return <div>{currentGame.game.id}</div>;
};
