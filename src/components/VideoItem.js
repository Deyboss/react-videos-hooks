import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  return (
    <div className="video-item item" onClick={props.onVideoSelect}>
      <img className="ui image" src={props.thumbnailURL} alt={props.alt} />
      <div className="content">
        <div className="header">{props.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
