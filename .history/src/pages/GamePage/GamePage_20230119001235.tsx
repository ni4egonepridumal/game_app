import React from 'react';
import { useAppSelector, useAppDispatch } from "../../hooks";

export const GamePage = () => {
    const { currentGame } = useAppSelector((state) => state);
    console.log(currentGame.game)
    return (
        <div>
           
        </div>
    );
};

