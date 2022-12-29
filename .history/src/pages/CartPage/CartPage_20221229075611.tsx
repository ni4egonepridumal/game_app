import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <ul>
      {gameInCart.map((game) => (
        <li key={uuidv4()}>{game.id}</li>
      ))}
    </ul>
  );
};
