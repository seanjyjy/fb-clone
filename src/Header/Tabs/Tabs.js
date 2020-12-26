import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import TvOutlinedIcon from "@material-ui/icons/TvOutlined";
// import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import "./tabs.css";

const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs-icon tabs-icon--active">
        <HomeIcon />
      </div>
      <div className="tabs-icon">
        <PeopleAltOutlinedIcon />
      </div>
      <div className="tabs-icon">
        <TvOutlinedIcon />
      </div>
      <div className="tabs-icon">
        <StorefrontOutlinedIcon />
      </div>
      <div className="tabs-icon">
        <GroupWorkIcon />
      </div>
    </div>
  );
};

export default Tabs;
