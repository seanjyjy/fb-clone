import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel/StoryReel";
import "./Feed.css";
import PostMessage from "./PostMessage/PostMessage";
import CreateRoom from "./CreateRoom/CreateRoom";
import FbPost from "./FbPost/FbPost";
import db from "../../Firebase";

const Feed = () => {
  const [posts, setPosts] = useState([[]]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostMessage />
      <CreateRoom />
      {posts.map((data, index) => (
        <FbPost key={index} {...data.data} />
      ))}
    </div>
  );
};

export default Feed;
