import React from "react";
import { Avatar } from "@material-ui/core";
import "./CircleIcon.css";

const CircleIcon = ({ imgUrl }) => {
  return (
    <div className="circle-icon">
      <Avatar src={imgUrl}></Avatar>
      <div className="online-circle">
        <div className="inner-circle" />
      </div>
    </div>
  );
};

export default CircleIcon;
