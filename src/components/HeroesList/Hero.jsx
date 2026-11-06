import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
import {Icon} from '@mdi/react'; 
import PropTypes from "prop-types";
import cn from "classnames";
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
  const heroClass = cn(styles.hero, { [styles["select"]]: isSelect });
  return (
    <article className={heroClass} onClick={() => setSelectedHero(hero)}>
      <h2>{name}</h2>
      <p>Сила: {power}</p>
      <p>
        {/* <button onClick={decrementRating}>down</button> */}
        <Icon path={mdiThumbDown} size={1} onClick={decrementRating}  color='red'/>
        <span className={styles.rating}>{rating}</span>
        {/* <button onClick={incrementRating}>up</button> */}
        <Icon path={mdiThumbUp} size={1} onClick={incrementRating} color='green'/>
      </p>
    </article>
  );
};

Hero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    power: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired ,
  }),
  changeRating: PropTypes.func,
  setSelectedHero: PropTypes.func,
  isSelect: PropTypes.bool,
};

export default Hero;
