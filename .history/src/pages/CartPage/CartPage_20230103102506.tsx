import React from "react";
import styles from "./CartPage.module.css";
import { v4 as uuidv4 } from "uuid";

import { useAppSelector, useAppDispatch } from "../../hooks";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { GameInCart } from "../../components/GameInCart";
import { deleteAllFromCart } from "../../features/addGameToCartSlice";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart)
  //const totalSumm = 
  const dispatch = useAppDispatch();
  const clearCart = () => {
    dispatch(deleteAllFromCart());
  };
  console.log(gameInCart);
  return (
    <>
      <h2>Корзина</h2>
      {gameInCart.length > 0 ? (
        gameInCart.map((item) => (
            <GameInCart key={uuidv4()} game={item} />
        ))
      ) : (
        <div className={styles.title}>
          <div className={styles.fontSizeCartEmpty}>Ваша корзина пуста !</div>
          <Link to="/">
            <Button type="secondary" size="m">
              Добавить товар в корзину
            </Button>
          </Link>
        </div>
      )}
      {gameInCart.length > 0 ? (
        <div className={styles.cartPageBottom}>
          <div>Всего на сумму:</div>
          <Button type="primary" size="m" onClick={clearCart}>
            Очистить корзину
          </Button>
        </div>
      ) : null}
    </>
  );
};
