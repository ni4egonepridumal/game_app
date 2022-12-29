import React from 'react';

interface IGameGenreProps {
    genre: string;
}

export const GameGenre: React.FC<IGameGenreProps> = ({genre}) => {
    return (
        <div>
            <span>{genre}</span>
        </div>
    );
};
