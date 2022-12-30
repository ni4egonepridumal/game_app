import React from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from "./GameInCart.module.css";
import { deleteAllFromCart } from "../../features/addGameToCartSlice";
import { useAppDispatch } from '../../hooks';
import { Button } from '../Button';
import IGameItemProps  from "../../types/GameItem";

export const GameInCart: React.FC<IGameItemProps> = () => {
    const [gamePriceCount, setGamePriceCount] = React.useState<number>(1);
    const dispatch = useAppDispatch();
    const clearCart = () => {
        dispatch(deleteAllFromCart());
      };
    
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
                //   style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.title}>
                  <div>Название игры</div>
                  <br></br>
                  <div> руб.</div>
                </div>
                <div>
                  <span className={styles.count} onClick={decrGameCount}>
                    -
                  </span>
                  <span className={styles.gameCount}>{gamePriceCount}</span>
                  <span
                    className={styles.count}
                    onClick={() => setGamePriceCount(gamePriceCount + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
          <div className={styles.cartPageBottom}>
            <div>Всего на сумму:</div>
            <Button type="primary" size="m" onClick={clearCart}>
              Очистить корзину
            </Button>
          </div>
        </div>
    );
};

