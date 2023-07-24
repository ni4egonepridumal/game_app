import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export const Header: React.FC = () => {
  const countGame = useAppSelector(
    (state) => state.addGameToCart.gameInCart.length
  );
  return (
    <div className={styles.header}>
      <Link to="/">
        <IoLogoGameControllerB size={50} />
      </Link>
      <Link to="/CartPage">
        <FaShoppingCart size={40} />
        {countGame > 0 ? (
          <span className={styles.countGame}>{countGame}</span>
        ) : null}
      </Link>
    </div>
  );
};
