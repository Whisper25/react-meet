// import { mdiThumbUp, mdiThumbDown } from '@mdi/js';
// import Icon from '@mui/material';
import styles from './Heroes.module.css'

const Hero = (props) => {
    const {hero:{id, name, power, rating}, changeRating} = props;
    return (
        <article className={styles.hero}>
            <h2>{name}</h2>
            <p>Сила: {power}</p>
            <p><button onClick={}>down</button>{rating}<button onClick={}>up</button></p>
        </article>
    );
}

export default Hero;
