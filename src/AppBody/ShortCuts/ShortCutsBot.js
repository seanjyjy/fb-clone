import React from "react";
import ShortCutsRow from "./ShortCutsRow/ShortCutsRow";
import "./ShortCutsBot.css";

const ShortCutsBot = () => {
  const imageStyling = {
    height: 35,
    width: 35,
    borderRadius: 10,
  };

  return (
    <div className="short-cuts-bot">
      <div className="short-cuts-bot-header">
        <span>Your Shortcuts</span>
      </div>
      <ShortCutsRow
        title={"Facebook Group!!!"}
        imgUrl="https://i.pinimg.com/originals/30/99/af/3099aff4115ee20f43e3cdad04f59c48.png"
        imageStyling={imageStyling}
        fontSize={14}
        fontWeight={600}
      />
      <ShortCutsRow
        title={"Dota 2 Competition"}
        userImgUrl="https://i.pinimg.com/originals/8a/8b/50/8a8b50da2bc4afa933718061fe291520.jpg"
        imageStyling={imageStyling}
        fontSize={14}
        fontWeight={600}
      />
      <ShortCutsRow
        title={"League of Legend group~"}
        userImgUrl="data:image/jpeg;base64,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"
        imageStyling={imageStyling}
        fontSize={14}
        fontWeight={600}
      />
    </div>
  );
};

export default ShortCutsBot;