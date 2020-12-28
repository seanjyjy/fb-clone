import React from "react";
import "./PostMessage.css";
import PhotoLibraryRoundedIcon from "@material-ui/icons/PhotoLibraryRounded";
import VoiceChatRoundedIcon from "@material-ui/icons/VoiceChatRounded";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import MessageBotComponent from "./MessageBotComponent";

const MessageBot = () => {
  const botComponents = [
    {
      name: "Live Video",
      Icon: VoiceChatRoundedIcon,
      style: { color: "#F02849" },
    },
    {
      name: "Photo/Video",
      Icon: PhotoLibraryRoundedIcon,
      style: { color: "#44BD62" },
    },
    {
      name: "Feeling/Activity",
      Icon: InsertEmoticonRoundedIcon,
      style: { color: "#F8C042" },
    },
  ];

  return (
    <div className="message-bot">
      {botComponents.map((data, index) => (
        <MessageBotComponent
          key={index}
          name={data.name}
          Icon={data.Icon}
          style={data.style}
        />
      ))}
    </div>
  );
};

export default MessageBot;
