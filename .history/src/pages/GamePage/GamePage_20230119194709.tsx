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
          <video controls={true}>
            <source
              src="www.youtube.com/watch?v=IEDEtZ4UVtI"
              type="video/mp4"
            />
          </video>
          <iframe
            width="90%"
            height="400px"
            src={currentGame.game.video}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </>
      )}
    </>
  );
};
