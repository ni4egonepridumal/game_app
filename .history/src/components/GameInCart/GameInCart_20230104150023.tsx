import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from "./GameInCart.module.css";
import { deleteAllFromCart, handleCount } from "../../features/addGameToCartSlice";
import { useAppDispatch, useAppSelector } from '../../hooks';

import IGameItemProps from "../../types/GameItem";

export const GameInCart: React.FC<IGameItemProps> = ({game}) => {
    //console.log(game)
    const [gamePriceCount, setGamePriceCount] = React.useState<number>(1);
    const countGame = useAppSelector(state => state.addGameToCart.gameInCart.reduce((acc, game)=> acc += (game.count*game.price), 0))
    
    console.log(countGame)
    const dispatch = useAppDispatch();
    const one = () => {
      dispatch(handleCount)
    }
    
    const decrGameCount = () => {
        if (gamePriceCount === 0) {
          setGamePriceCount(0);
        } else {
          setGamePriceCount(gamePriceCount - 1);
        }
      };
    return (
        <div>
              <div key={uuidv4()} className={styles.game}>
                <div
                  className={styles.img}
                style={{ backgroundImage: `url(${game.image})` }}
                />
                <div className={styles.title}>
                  <div>{game.title}</div>
                  <br></br>
                  <div> {game.price}руб.</div>
                </div>
                <div>
                  <span className={styles.count} onClick={decrGameCount}>
                    -
                  </span>
                  <span className={styles.gameCount}>{game.count}</span>
                  <span
                    className={styles.count}
                    onClick={one}
                  >
                    +
                  </span>
                </div>
              </div>
         
        </div>
    );
};

