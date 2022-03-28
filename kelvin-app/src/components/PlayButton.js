import React from "react";
import Data from "../data/Data";

const PlayButton = () => {
  return (
    <div className="button">
      <a className="btn" role="button" href={Data.uri}>
        Select
      </a>
    </div>
  );
};

export default PlayButton;