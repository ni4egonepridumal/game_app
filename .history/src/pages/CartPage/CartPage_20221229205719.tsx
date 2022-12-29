import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./CartPage.module.css";

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  const [gamePriceCount, setGamePriceCount] = React.useState<number>(1);
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
      {gameInCart.map((item) => {
        return (
          <div key={uuidv4()} className={styles.game}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className={styles.title}>
              <div>{item.title}</div>
              <br></br>
              <div>{item.price} руб.</div>
            </div>
            <div>
              <span className={styles.count} onClick={decrGameCount}>
                -
              </span>
              <span className={styles.gameCount}>{gamePriceCount}</span>
              <span
                className={styles.count}
                onClick={() => setGamePriceCount(gamePriceCount + 1)}
              >
                +
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
