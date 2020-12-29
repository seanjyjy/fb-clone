import React from "react";
import "./BirthdayContact.css";
import Birthday from "./Birthday";
import Contact from "./Contacts";
import GroupConversations from "./GroupConversations";
import Fab from "@material-ui/core/Fab";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";

const BirthdayContact = () => {
  const Divider = () => {
    return (
      <div
        style={{
          height: "10px",
          width: "345px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            backgroundColor: "#3E4042",
            width: "325px",
            height: "1px",
            transform: "translateX(10px)",
          }}
        />
      </div>
    );
  };

  return (
    <div className="birthday-contact">
      <Birthday />
      <Divider />
      <Contact />
      <Divider />
      <GroupConversations />
      <Fab
        style={{
          backgroundColor: "#3e4042",
          height: 50,
          width: 50,
          marginRight: 0,
          right: 20,
          position: "fixed",
          bottom: 20,
        }}
      >
        <CreateRoundedIcon style={{ color: "white" }} fontSize="medium" />
      </Fab>
    </div>
  );
};

export default BirthdayContact;
