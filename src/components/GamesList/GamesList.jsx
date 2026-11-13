import { useState } from "react";
import games from "./data";
import GameSection from "./GameSection";

const GamesList = () => {
  const [favouriteGamesId, setFavouriteGamesId] = useState([]);
  const favouriteGames = games.filter((game) =>
    favouriteGamesId.includes(game.id)
  );
  const otherGames = games.filter(
    (game) => !favouriteGamesId.includes(game.id)
  );
  const toggleFavourite = (id) => {
    setFavouriteGamesId((prevGamesId) =>
      prevGamesId.includes(id)
        ? prevGamesId.filter((favId) => favId !== id)
        : [...prevGamesId, id]
    );
  };
  return (
    <>
      <GameSection title={"favourite games"} games={favouriteGames} toggleFavourite={toggleFavourite} favouriteGamesId={favouriteGamesId}/>
      <GameSection title={"all games"} games={otherGames} toggleFavourite={toggleFavourite} favouriteGamesId={favouriteGamesId}/>
    </>
  );
};

export default GamesList;
