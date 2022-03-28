import React from 'react';
import './App.css';
import Data from "./data/Data";
import Song from "./components/index"


function App() {
    
      return (
        <div className="container">
      <div className="Header">
        <h1>Song Playlist</h1>
      </div>

        
        {Data
        .map((d) => (
          <trackSong
         image={d.album.images[0].url} 
         album={d.name} 
         artist={d.artists[0]?.name} 
         title={d.album.name} 
         key={d.album.name}/>
        ))}
      </div>
      );
}

export default App;