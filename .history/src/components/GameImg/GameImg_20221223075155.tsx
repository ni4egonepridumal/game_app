import React from 'react';
import styles from "./GameImg.module.css";

interface GameImgProps {
    image: string
}

export const GameImg: React.FC<GameImgProps> = ({image}) => {
    return (
        
            <div className={styles.image} style={{ backgroundImage: `url(${image})`}}/>
        
    );
};

