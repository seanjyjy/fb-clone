import React, { useState } from "react";
import "./PostMessage.css";
import { Avatar } from "@material-ui/core";

const MessageTop = ({ name }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");
  };

  const [text, setText] = useState("");

  return (
    <div className="message-top">
      <Avatar />
      <form>
        <div className="message-top-input">
          <input
            placeholder={`What's on your mind, ${name}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};

export default MessageTop;
