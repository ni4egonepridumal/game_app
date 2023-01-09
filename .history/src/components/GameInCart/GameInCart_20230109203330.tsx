import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./GameInCart.module.css";
import { plusCount, minusCount } from "../../features/addGameToCartSlice";
import { useAppDispatch } from "../../hooks";
import { BsTrash } from 'react-icons/bs';

import IGameItemProps from "../../types/GameItem";

export const GameInCart: React.FC<IGameItemProps> = ({ game }) => {
  const dispatch = useAppDispatch();

  const PlusCountGame = () => {
    dispatch(plusCount(game.id));
  };
  const MinusCountGame = () => {
    dispatch(minusCount(game.id));
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
          <span className={styles.count} onClick={MinusCountGame}>
            -
          </span>
          <span className={styles.gameCount}>{game.count}</span>
          <span className={styles.count} onClick={PlusCountGame}>
            +
          </span>
        </div>
        <BsTrash />
      </div>
     
    </div>
  );
};
