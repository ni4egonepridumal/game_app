import React, { ReactNode } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

import IButtonProps from "../../types/Button";

export const Button: React.FC<IButtonProps> = ({
  children,
  type,
  size,
  onClick,
}) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.small]: size === "s",
        [styles.medium]: size === "m",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
