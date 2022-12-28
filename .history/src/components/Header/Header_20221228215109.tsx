import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
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
