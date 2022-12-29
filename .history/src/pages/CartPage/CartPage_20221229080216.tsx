import React from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./CartPage.module.css";

import { useAppSelector } from "../../hooks";

export const CartPage: React.FC = () => {
  const gameInCart = useAppSelector((state) => state.addGameToCart.gameInCart);
  console.log(gameInCart);
  return (
    <div className={styles.game}>
      <img />
      <div>
        <div>Name</div>
        <div>price</div>
      </div>
      <div>
        <span>+</span>
        <span>2</span>
        <span>-</span>
      </div>

      
    </div>
  );
};
