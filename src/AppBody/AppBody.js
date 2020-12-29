import React from "react";
import "./AppBody.css";
import ShortCuts from "./ShortCuts/ShortCuts";
import Feed from "./Feed/Feed";
import BirthdayContact from "./BirthdayContacts/BirthdayContact";

const AppBody = () => {
  return (
    <div className="app-body">
      <ShortCuts />
      <div style={{ flex: 0.2 }} />
      <Feed />
      <div style={{ flex: 0.2 }} />
      <BirthdayContact />
    </div>
  );
};

export default AppBody;
