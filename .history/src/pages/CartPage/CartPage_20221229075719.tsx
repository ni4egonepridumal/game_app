import React from "react";
import { v4 as uuidv4 } from 'uuid';

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <div>
      {gameInCart.map((game) => (
        <div key={uuidv4()}>{game.id}</div>
      ))}
    </div>
  );
};
