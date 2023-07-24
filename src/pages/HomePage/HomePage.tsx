import React from "react";
import { GameItem } from "../../components/GameItem";
import styles from "./HomePage.module.css";
import axios from "axios";
import { IGameItem } from "../../types/GameItem";

export const HomePage: React.FC = () => {
  const [game, setGame] = React.useState<IGameItem[]>([]);

  async function getGames() {
    try {
      const response = await axios.get<IGameItem[]>(
        "http://localhost:8000/games"
      );
      setGame(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  React.useEffect(() => {
    getGames();
  }, []);
  return (
    <div className={styles.homePage}>
      {game.map((game) => {
        return <GameItem key={game.title} game={game} />;
      })}
    </div>
  );
};
