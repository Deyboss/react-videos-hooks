import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        thumbnailURL={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        alt={video.snippet.description}
        onVideoSelect={() => props.onVideoSelect(video)}
      />
    );
  });

  return (
    <div className="video-list ui relaxed divided list">{renderedList}</div>
  );
};

export default VideoList;
