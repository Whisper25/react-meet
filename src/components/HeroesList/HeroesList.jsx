import heroesInitial from "./data";
import Hero from './Hero';
import styles from './Heroes.module.css'
import { useState } from 'react';
const HeroesList = () => {
    const [heroes, setHeroes] = useState(heroesInitial);
    const changeRating = (id, newRating)=>{
        setHeroes((prev)=>prev.map((hero)=>hero.id===id?{...hero, rating:newRating}:hero))
    }
    const showHero = (hero)=><li key={hero.id}><Hero changeRating={changeRating} hero={hero}/></li>
    
    return (
        <section className={styles.heroSection}>
            <h2>Оберіть улюбленого героя</h2>
                <ul>
                    {heroes.map(showHero)}
                </ul>
        </section>
    );
}

export default HeroesList;
