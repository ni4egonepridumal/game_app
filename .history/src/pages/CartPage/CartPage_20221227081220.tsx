import React from "react";

import { useAppSelector } from "../../hooks";

export const CartPage = () => {
  const gameInCart = useAppSelector(state => state.addGameToCart)
  console.log(gameInCart)
  return (<div>Корзина</div>);
};
