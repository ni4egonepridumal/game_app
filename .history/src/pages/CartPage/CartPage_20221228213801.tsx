import React from "react";

import { useAppSelector } from "../../hooks";

export const CartPage = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <ul>
      <li>{gameInCart.map((game) => game.id)}</li>
    </ul>
  );
};
