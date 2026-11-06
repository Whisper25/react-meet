import heroesInitial from "./data";
import Hero from "./Hero";
import styles from "./Heroes.module.css";
import { useState } from "react";
const HeroesList = () => {
  const [heroes, setHeroes] = useState(heroesInitial);
  const [selectedHero, setSelectedHero] = useState(null);
  const changeRating = (id, newRating) => {
    setHeroes((prev) =>
      prev.map((hero) =>
        hero.id === id ? { ...hero, rating: newRating } : hero
      )
    );
    if(id===selectedHero?.id){
        setSelectedHero((prev)=>({...prev, rating: newRating}))
    }
  };
  const showHero = (hero) => (
    (hero.name)&&<li key={hero.id}>
      <Hero
        changeRating={changeRating}
        hero={hero}
        setSelectedHero={setSelectedHero}
        isSelect={hero.id === selectedHero?.id}
      />
    </li>
  );

  return (
    <>
      <section className={styles.heroSection}>
        <h2>Оберіть улюбленого героя</h2>
        <ul>{heroes.map(showHero)}</ul>
      </section>
      <section className={styles.heroSection}>
        <h2>Ви обрали</h2>
        {selectedHero ? (
          <Hero hero={selectedHero} changeRating={changeRating} />
        ) : (
          <p>Героя ще не вибрано</p>
        )}
      </section>
    </>
  );
};

export default HeroesList;
