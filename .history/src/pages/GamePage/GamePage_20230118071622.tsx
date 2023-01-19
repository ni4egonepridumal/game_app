import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';

export const GamePage = () => {
    const b =useAppSelector(state=>state)
    console.log(b) 
    return (
        <div>
            Страница игры
        </div>
    );
};

