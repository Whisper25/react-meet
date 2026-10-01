import { useState } from "react";
import _ from "lodash";
import styles from "./Game.module.css";

const Game = () => {
  const variants = ["Камінь", "Ножиці", "Папір"];
  const [result, setResult] = useState('');
  const [compChoice, setCompChoice] = useState('');
  const [playerChoice, setPlayerChoice] = useState('');
  const getResult = (player, comp) => {
    if (player === comp) {
      setResult("Нічия");
    } else if (
      (player === "Камінь" && comp === "Ножиці") ||
      (player === "Ножиці" && comp === "Папір") ||
      (player === "Папір" && comp === "Камінь")
    ) {
      setResult("Ти переміг!");
    } else {
      setResult("Компьютер переміг");
    }
  };
  const play = (variant) => {
    const randomVariant = variants[_.random(0, variants.length - 1)];
    setPlayerChoice(variant);
    setCompChoice(randomVariant);
    getResult(variant, randomVariant);
  };
  const showVariant = (variant) => (
    <button
      onClick={() => play(variant)}
      key={variant}
      className={styles.variant}
    >
      {variant}
    </button>
  );

  return (
    <section className={styles.game}>
      <h2>Гра “Камінь, Ножиці, Папір</h2>
      <div>{variants.map(showVariant)}</div>
      {playerChoice && (
        <div>
          <p>Твій вибір {playerChoice}</p>
          <p>Вибір компьютера {compChoice}</p>
          <p><strong>{result}</strong></p>
        </div>
      )}
    </section>
  );
};

export default Game;
