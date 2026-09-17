import styles from './Song.module.css'
const Song = (props) => {
    const {song:{image, genre, artist, title}} = props;
    return (
        <article className={styles.song}>
            <img src={image} alt={artist}/>
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{genre}</p>
        </article>
    );
}

export default Song;
