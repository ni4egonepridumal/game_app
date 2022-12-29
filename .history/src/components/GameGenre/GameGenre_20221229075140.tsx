import React from 'react';
import styles from "./GameGenre.module.css";

interface IGameGenreProps {
    genre: string;
}

export const GameGenre: React.FC<IGameGenreProps> = ({genre}) => {
    return (
        <div>
            <span className={styles.genre}>{genre}</span>
        </div>
    );
};
