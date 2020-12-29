import React from "react";
import "./BirthdayContact.css";
import BirthdayContactRow from "./BirthdayContactRow/BirthdayContactRow";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const GroupConversations = () => {
  const Icon = () => {
    return (
      <div className="group-conversations-icon">
        <AddRoundedIcon fontSize="small" />
      </div>
    );
  };
  return (
    <div className="group-conversations">
      <h3>Group Conversations</h3>
      <BirthdayContactRow name="Create New Group" Icon={Icon} />
    </div>
  );
};

export default GroupConversations;
