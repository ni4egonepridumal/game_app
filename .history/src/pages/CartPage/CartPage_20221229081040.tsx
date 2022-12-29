import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CartPage.module.css";

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <>
      <h2>Корзина</h2>
      {gameInCart.map((item) => {
        <div className={styles.game}>
          <div style={{backgroundImage: `url(${item.image})`}}></div>
          <div className={styles.game}>
            <div>Name</div>
            <div>price</div>
          </div>
          <div>
            <span>+</span>
            <span>2</span>
            <span>-</span>
          </div>
        </div>;
      })}
    </>
  );
};
