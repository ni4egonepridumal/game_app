import React from 'react';
import { GameItem } from '../../components/GameItem';
import {Header} from '../../components/Header';



export const HomePage: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <div>
                <GameItem />
            </div>
        </div>
    );
};

