// import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
// import Icon from '@mui/material';
import cn from 'classnames';
import styles from "./Heroes.module.css";

const Hero = (props) => {
  const { hero, changeRating, setSelectedHero, isSelect } = props;
  const { id, name, power, rating } = hero;
  //create increment dicrement function
  const incrementRating = (event) => {
    event.stopPropagation();
    const newRating = Math.min(rating + 1, 5);
    changeRating(id, newRating);
  };
  const decrementRating = (event) => {
    event.stopPropagation();

    const newRating = Math.max(rating - 1, 1);
    changeRating(id, newRating);
  };
  const heroClass = cn(styles.hero, {[styles['select']]:isSelect})
  return (
    <article className={heroClass} onClick={() => setSelectedHero(hero)}>
      <h2>{name}</h2>
      <p>Сила: {power}</p>
      <p>
        <button onClick={decrementRating}>down</button>
        {rating}
        <button onClick={incrementRating}>up</button>
      </p>
    </article>
  );
};

export default Hero;
