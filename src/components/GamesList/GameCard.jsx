import styles from './Games.module.css'
const GameCard = (props) => {
    const {game, isFavourite, setFavourite} = props;
    const {id, title, genre, rating} = game;
    return (
        <article className={styles.card}>
            <h3>{title}</h3>
            <p>{genre}</p>
            <p>{rating}/10</p>
            <button onClick={()=>setFavourite(id)}>{isFavourite?'❤️':'🤍'}</button>
        </article>
    );
}

export default GameCard;
