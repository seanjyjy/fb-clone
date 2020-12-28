import React from "react";
import "./PostMessage.css";

const MessageBotComponent = ({ name, Icon, style }) => {
  return (
    <div className="message-bot-component">
      <Icon style={style} />
      <h3>{name}</h3>
    </div>
  );
};
export default MessageBotComponent;
