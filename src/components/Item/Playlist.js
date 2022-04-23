const Playlist = ({ hanldeAddPlaylist, handleAddSubmit, addPlaylistData }) => {
    return (
        <div className="form-playlist">
            <h2>Create a Playlist</h2>
            <form onSubmit={handleAddSubmit}>
                <label>Title</label><br />
                <input id="title" type="text" min="10" value={addPlaylistData.title} onChange={hanldeAddPlaylist} name="title" />
                <br />
                <br></br>
                <label> Description </label><br />
                <textarea id="description" type="text" value={addPlaylistData.description} onChange={hanldeAddPlaylist} name="description" />
                <br />
                <button id="save" className="selectButton" type="submit" value="Submit" onClick={() => {alert("After klik this alert, Your playlist will saved in your spotify! ");}}>Save</button>
            </form>
        </div>
    )
}

export default Playlist;