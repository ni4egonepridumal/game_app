import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

export const GamePage = () => {
  const { currentGame } = useAppSelector((state) => state);
 // отобразить все элементы из объекта с версткой
 
  {currentGame.game.id === 123 ? <div>123</div> : <></>}
};
