import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

interface IButtonProps {
  children: ReactNode;
  type: string;
  size: string
}

export const Button: React.FC<IButtonProps> = ({ children, type, size }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.small]: size === "s",
        [styles.medium]: size === "m"
      })}
    >
      {children}
    </button>
  );
};
