import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./GameInCart.module.css";
import { useAppDispatch } from "../../hooks";

import IGameItemProps from "../../types/GameItem";

export const GameInCart: React.FC<IGameItemProps> = ({ game, setCountGame, countGame = 1 }) => {
  //console.log(setOne(12));
  const [gamePriceCount, setGamePriceCount] = React.useState<number>(1);
  const dispatch = useAppDispatch();

  const decrGameCount = () => {
    if (countGame === 1) {
      setCountGame&&(1);
    } else {
      setCountGame&&(countGame - 1);
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
          <span className={styles.gameCount}>{countGame}</span>
          <span
            className={styles.count}
            onClick={() => setCountGame&&(countGame + 1)}
          >
            +
          </span>
        </div>
      </div>
      {/* <p onClick={()=> setCountGame(countGame + 1)}>rkbr</p> */}
    </div>
  );
};
