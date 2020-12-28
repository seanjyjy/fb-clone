import React from "react";
import "./PostMessage.css";
import MessageTop from "./MessageTop";
import MessageBot from "./MessageBot";
const PostMessage = () => {
  const MessageSeperator = () => {
    return (
      <div className="message-seperator-holder">
        <div className="message-seperator" />
      </div>
    );
  };

  return (
    <div className="post-message">
      <MessageTop />
      <MessageSeperator />
      <MessageBot />
    </div>
  );
};

export default PostMessage;
