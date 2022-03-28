import React from "react";

const AlbumTitle = (props) => {
  return (
    <div className="title">
      <h2>{props.name}</h2>
      <h4>
        {props.type}
        <td></td>
        {props.artist}
      </h4>
    </div>
  );
};

export default AlbumTitle;