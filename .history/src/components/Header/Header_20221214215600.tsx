import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/Io";
import { FaShoppingCart } from "react-icons/Fa";

export const Header: React.FC = () => {
  return (
    <div className={styles.homePage}>
      {/*<IoLogoGameControllerB /> */}
      <FaShoppingCart />
    </div>
  );
};
