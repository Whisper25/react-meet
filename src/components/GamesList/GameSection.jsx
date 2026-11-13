import styles from "./Games.module.css";

import GameCard from "./GameCard";
const GameSection = (props) => {
  const { title, games, favouriteGamesId, toggleFavourite } = props;
  const showGame = (game) => (
    <GameCard
      game={game}
      key={game.id}
      isFavourite={favouriteGamesId.includes(game.id)}
      setFavourite={toggleFavourite}
      
    />
  );
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.games}>{games.map(showGame)}</div>
    </section>
  );
};

export default GameSection;
