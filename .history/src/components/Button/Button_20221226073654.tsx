import React, { ReactNode } from 'react';
import styles from "./Button.module.css";

interface IButtonProps {
    children: ReactNode
}

export const Button: React.FC<IButtonProps> = ({children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    );
};

