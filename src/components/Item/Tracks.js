import Button from "./Button";

const SongCard = ({ imgSrc, title, artists,releasedate, album, Selected, handleSelect, uri }) => {
    return (
        <div className="card-search">
                <img src={imgSrc} alt="" />
                <h1>{title}</h1>
                <h2> By {artists.map(artist => artist.name).join(', ')}</h2>
                <h3>Album : {album}</h3>
                <p> {releasedate}</p>
                <Button onClick={() => handleSelect(uri)}> {Selected ? 'Deselect' : 'Select'} </Button>
        </div>
    );
}

export default SongCard;