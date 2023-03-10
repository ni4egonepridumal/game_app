import React from "react";
import styles from "./Header.module.css";

import { IoLogoGameControllerB } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <IoLogoGameControllerB size={50} onClick={()=> console.log("click")}/> 
      <FaShoppingCart size={40}/>
    </div>
  );
};
