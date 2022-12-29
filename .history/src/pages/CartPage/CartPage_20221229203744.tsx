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
        return (
          <div key={uuidv4()} className={styles.game}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${item.image})` }}
            />
            {/* <img src={item.image}/>*/}
            <div className={styles.title}>
              <div>{item.title}</div>
              <br></br>
              <div>price</div>
            </div>
            <div>
              <span className={styles.count}>+</span>
              <span>2</span>
              <span className={styles.count}>-</span>
            </div>
          </div>
        );
      })}
    </>
  );
};
