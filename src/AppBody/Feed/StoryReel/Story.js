import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

const Story = ({ img, profileImg, name }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${img})` }}>
      <Avatar src={profileImg} className="story-avatar" />
      <h4>{name}</h4>
    </div>
  );
};

export default Story;
