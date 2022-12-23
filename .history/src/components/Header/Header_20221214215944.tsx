import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <IoLogoGameControllerB size={80}/> 
      <FaShoppingCart size={80}/>
    </div>
  );
};
