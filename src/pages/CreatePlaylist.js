import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Playlist from '../components/Item/Playlist';
import Songs from '../components/Item/index';
import SearchForm from '../components/Item/Search';


const CreatePlaylist = () => {
    const [tracksData, setTracksData] = useState([]);
    const [query, setQuery] = useState(""); 
    const [selectedSong, setselectedSong] = useState([]); 
    const [mergedTracks, setMergedTracks] = useState([]); 
    const accessToken = useSelector((state) => state.accessToken.value);

    useEffect(() => {
        const mergedTracksWithselectedSong
            = tracksData.map((track) => ({
                ...track,
                Selected: !!selectedSong.find((selectedTrack) => selectedTrack === track.uri),
            }));
        setMergedTracks(mergedTracksWithselectedSong); 
    }, [selectedSong, tracksData]);

    
    const handleSelect = (uri) => {
        const alreadySelected = selectedSong.find(selectedTrack => selectedTrack === uri) 
        if (alreadySelected) {
            setselectedSong(selectedSong.filter(selectedTrack => selectedTrack !== uri)) 
        }
        else {
            setselectedSong((selectedSong) => [...selectedSong, uri]) 
        }
        console.log(selectedSong)
    };

    const handleGetData = async () => {
        const data = await axios 
            .get(
                `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`
            )
            .then((response) => response)
            .catch((error) => error)
        setTracksData(data.data.tracks.items); 
        console.log(data);
    }

    const handleSearch = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault(); 
        handleGetData();
    }

    const [addPlaylistData, setAddPlaylistData] = useState({
        title: '',
        description: '',
    })

    const bodyParams = {
        name: addPlaylistData.title,
        description: addPlaylistData.description,
        collaborative: false,
        public: false
    }

    const header = {
        Authorization: `Bearer ${accessToken}` 
    }

    const hanldeAddPlaylist = e => {
        const { name, value } = e.target;
        setAddPlaylistData({ ...addPlaylistData, [name]: value }) 
    }

    const fetchUserID = async () => {
        const data = await axios 
            .get(
                `https://api.spotify.com/v1/me?access_token=${accessToken}`
            )
            .catch((error) => error)
        return data.data.id; 
    }

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const user_id = await fetchUserID();
        const data = await axios 
            .post(
                `https://api.spotify.com/v1/users/${user_id}/playlists`, bodyParams,
                {
                    headers: header
                }
            )
            .catch((error) => error)
        handlAddSongPlaylist(data.data.id) 
    }

    
    const itemParams = {
        uris: selectedSong 
    }

    const handlAddSongPlaylist = async (playlist_id) => {
        const data = await axios 
            .post(
                `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, itemParams,
                {
                    headers: header
                }
            )
            .catch((error) => error)
        console.log(data);
    }
    const handlekeluar = ()=>{
        localStorage.clear()
        window.location = `http://localhost:3000/`;
    }

    return (
        <>
            <button onClick={handlekeluar}>Log Out</button>
            <Playlist
                hanldeAddPlaylist={hanldeAddPlaylist}
                handleAddSubmit={handleAddSubmit}
                addPlaylistData={addPlaylistData} />
            <SearchForm
                onSubmit={handleSubmitSearch}
                onChange={handleSearch} />
            <br />
            <div> 
                {mergedTracks !== undefined && ( 
                    <Songs 
                        mergedTracks={mergedTracks} 
                        handleSelect={handleSelect} key={mergedTracks.uri} />
                )}
            </div>
        </>
    )
}

export default CreatePlaylist;