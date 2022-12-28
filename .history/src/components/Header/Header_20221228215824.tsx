import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export const Header: React.FC = () => {
  const countGame = useAppSelector(state=> state.addGameToCart.gameInCart);
  console.log(countGame.length)
  return (
    <div className={styles.header}>
      <Link to="/">
        <IoLogoGameControllerB size={50} />
      </Link>
      <Link to="/CartPage">
        <FaShoppingCart size={40} />
        <span className={styles.countGame}>2</span>
      </Link>
    </div>
  );
};
