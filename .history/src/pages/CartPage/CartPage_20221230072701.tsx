import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CartPage.module.css";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { deleteAllFromCart } from "../../features/addGameToCartSlice";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

{/* ПОПРОБУЙ СМОЗДАТЬ КОМПОНЕНТ, КОТОРЫЙ ТУТ РЕНДЕРИТСЯ и ПРОПСАМИ ПРОКИНУТь ИГРЫ ТОГДА ВОЗМОЖНО ТЫ РЕШИШЬ ВОПРОСМ Со смежным стейтом */}
export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  const dispatch = useAppDispatch();
  const [gamePriceCount, setGamePriceCount] = React.useState<number>(1);
  const clearCart = () => {
    dispatch(deleteAllFromCart());
  };

  const decrGameCount = () => {
    if (gamePriceCount === 0) {
      setGamePriceCount(0);
    } else {
      setGamePriceCount(gamePriceCount - 1);
    }
  };
  return (
    <>
      <h2>Корзина</h2>
      {gameInCart.length > 0 ? (
        
          
             <div>компонент игры</div>
            
        
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
