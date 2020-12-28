import React from "react";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import PostMessage from "./PostMessage/PostMessage";
import CreateRoom from "./CreateRoom/CreateRoom";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <PostMessage />
      <CreateRoom />
    </div>
  );
};

export default Feed;
