import React from "react";
import "./FbPost.css";
import { Avatar } from "@material-ui/core";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RedoOutlinedIcon from "@material-ui/icons/RedoOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

const FbPost = ({ profileImg, img, name, text, timestamp }) => {
  return (
    <div className="fb-post">
      <div className="fb-post-top">
        <Avatar src={profileImg} className="fb-post-top-avatar" />
        <div className="fb-name-time-info">
          <h3>{name}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
        <MoreHorizOutlinedIcon className="fb-post-top-more" />
      </div>
      <div className="fb-post-text">
        <p>{text}</p>
      </div>
      <div className="fb-post-image">
        <img src={img} alt="" />
      </div>

      <div className="fb-post-options">
        <div className="fb-post-option">
          <ThumbUpOutlinedIcon />
          <p>Like</p>
        </div>
        <div className="fb-post-option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="fb-post-option">
          <RedoOutlinedIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default FbPost;
