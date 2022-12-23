import React from 'react';

interface GameImgProps {
    image: string
}

const GameImg: React.FC<GameImgProps> = ({image}) => {
    return (
        
            <div className="game-cover" style={{ backgroundImage: `url(${image})`}}/>
        
    );
};

export default GameImg;