import React from 'react';
import styles from "./GameImg.module.css";

interface GameImgProps {
    image: string
}

const GameImg: React.FC<GameImgProps> = ({image}) => {
    return (
        
            <div className={styles.image} style={{ backgroundImage: `url(${image})`}}/>
        
    );
};

export default GameImg;