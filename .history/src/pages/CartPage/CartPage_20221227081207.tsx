import React from "react";

import { useAppSelector } from "../../hooks";

export const CartPage = () => {
  const gameInCart = useAppSelector(state => state.addGameToCart)
  return (<div>Корзина</div>);
};
