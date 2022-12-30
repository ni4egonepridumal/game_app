import React from "react";
import styles from "./CartPage.module.css";
import {v4 as uuidv4} from "uuid"


import { useAppSelector } from "../../hooks";

import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { GameInCart } from "../../components/GameInCart";

{
  /* ПОПРОБУЙ СМОЗДАТЬ КОМПОНЕНТ, КОТОРЫЙ ТУТ РЕНДЕРИТСЯ и ПРОПСАМИ ПРОКИНУТь ИГРЫ ТОГДА ВОЗМОЖНО ТЫ РЕШИШЬ ВОПРОСМ Со смежным стейтом */
}
export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart)
  return (
    <>
      <h2>Корзина</h2>
      {gameInCart.length > 0 ? (
        gameInCart.map(item => <GameInCart key={} game={item}/>)
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
    </>
  );
};
