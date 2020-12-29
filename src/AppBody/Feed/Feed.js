import React from "react";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import PostMessage from "./PostMessage/PostMessage";
import CreateRoom from "./CreateRoom/CreateRoom";
import FbPost from "./FbPost/FbPost";

const Feed = () => {
  const posts = [
    {
      name: "Sean",
      timestamp: "123",
      text:
        "Computer Science undergraduate. Sophomore at National University of Singapore",
      profileImg:
        "https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4",
      img:
        "https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4",
    },
    {
      name: "Ashley",
      timestamp: "123",
      text: "Aspiring software developer who loves sports!",
      profileImg: "https://avatars1.githubusercontent.com/u/65171313?s=100&v=4",
      img: "https://avatars1.githubusercontent.com/u/65171313?s=100&v=4",
    },
    {
      name: "Kenny",
      timestamp: "123",
      text: "Computer Science undergraduate",
      profileImg: "https://avatars3.githubusercontent.com/u/61320387?s=100&v=4",
      img: "https://avatars3.githubusercontent.com/u/61320387?s=100&v=4",
    },
  ];

  return (
    <div className="feed">
      <StoryReel />
      <PostMessage />
      <CreateRoom />
      {posts.map((data, index) => (
        <FbPost key={index} {...data} />
      ))}
    </div>
  );
};

export default Feed;
