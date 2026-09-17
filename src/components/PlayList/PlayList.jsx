import Song from '../Song/Song';
import Title from '../Title/Title';
import songs from './data'
const PlayList = () => {
    const showSongs = (song, index)=>(<Song key={index} song={song}/>)
    return (
        <section>
            <Title title='Play List'/>
            <div>
                {songs.map(showSongs)}
            </div>
        </section>
    );
}

export default PlayList;
