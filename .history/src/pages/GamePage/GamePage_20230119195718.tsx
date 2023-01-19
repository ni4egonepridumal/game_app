import React from "react";
import { Button } from "../../components/Button";
import { GameGenre } from "../../components/GameGenre";
import { GameImg } from "../../components/GameImg";
import { useAppSelector, useAppDispatch } from "../../hooks";
import styles from "./GamePage.module.css";

export const GamePage = () => {
  const { currentGame } = useAppSelector((state) => state);
  // отобразить все элементы из объекта с версткой

  return (
    <>
      {currentGame.game.id === 123 ? null : (
        <div className="game-page">
          <h1 className="game-page__title">{currentGame.game.title}</h1>
          <div className="game-page__content">
            <div className={styles.gamePage__left}>
              <iframe
                width="90%"
                height="400px"
                src={currentGame.game.video}
                title="YouTube video player"
                // frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <div className={styles.gamePage__right}>
              <GameImg game={currentGame.game} />
              <p>{currentGame.game.description}</p>
              <p className="secondary-text">
                Популярные метки для этого продукта:
              </p>
              {currentGame.game.genres.map((genre) => (
                <GameGenre genre={genre} key={genre} />
              ))}
              <div className="game-page__buy-game">{/* <Button  /> */}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
