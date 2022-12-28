import React from "react";

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <ul>
      {gameInCart.map((game) => (
        <li>{game.id}</li>
      ))}
    </ul>
  );
};
