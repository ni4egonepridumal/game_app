import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

import IButtonProps from "../../types/Button";

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  size,
  cursor,
  onClick,
}) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
        [styles.pointer]: cursor === "pointer",
        [styles.auto]: cursor === "auto",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
