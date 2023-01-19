import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";

export const GamePage = () => {
  const { currentGame } = useAppSelector((state) => state);
  // отобразить все элементы из объекта с версткой

  return (
    <>
      {currentGame.game.id === 123 ? null : (
        <>
          <div>{currentGame.game.description}</div>
          <video>
            <source
              src="www.youtube.com/watch?v=IEDEtZ4UVtI"
              type="video/mp4"
            />
          </video>
        </>
      )}
    </>
  );
};
