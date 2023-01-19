import React from "react";
import { Button } from "../../components/Button";
import { GameGenre } from "../../components/GameGenre";
import { GameImg } from "../../components/GameImg";
import { removeGame, addGame } from "../../features/addGameToCartSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import styles from "./GamePage.module.css";

export const GamePage = () => {
  const { currentGame } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const itemGame = useAppSelector((state) => state.addGameToCart.gameInCart);
  const isGameInCart = itemGame.some((item) => item.id === currentGame.game.id);
  const handleClick = () => {
    if (isGameInCart) {
      dispatch(removeGame(currentGame.game.id));
    } else {
      dispatch(addGame(currentGame.game));
    }
  };
  // отобразить все элементы из объекта с версткой

  return (
    <>
      {currentGame.game.id === 123 ? null : (
        <div className={styles.gamePage}>
          <h1 className="game-page__title">{currentGame.game.title}</h1>
          <div className={styles.gamePage__content}>
            <div className={styles.gamePage__left}>
              <iframe
                className={styles.iframe}
                width="90%"
                height="400px"
                src={currentGame.game.video}
                title="YouTube video player"
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
              <div className="game-page__buy-game">
                {" "}
                <Button
                  type={!isGameInCart ? "primary" : "secondary"}
                  size="s"
                  onClick={handleClick}
                >
                  {!isGameInCart ? "Добавить в корзину" : "Убрать из корзины"}
                </Button>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
