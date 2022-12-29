import React from 'react';
import styles from "./GameGenre.module.css";

import { IGameGenreProps } from '../../types/GameGenre';

export const GameGenre: React.FC<IGameGenreProps> = ({genre}) => {
    return (
        <div>
            <span className={styles.genre}>{genre}</span>
        </div>
    );
};
