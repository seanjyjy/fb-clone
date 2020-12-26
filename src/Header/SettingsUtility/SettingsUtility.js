import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./settingsUtility.css";
const SettingsUtility = () => {
  return (
    <div className="settings-utility">
      <div className="user-info">
        <div className="user-info-holder">
          <Avatar src="https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4" />
          <h4>Sean</h4>
        </div>
      </div>
      <div className="utility-buttons">
        <IconButton size="small">
          <div className="utility-button-icon">
            <AddRoundedIcon fontSize="small" />
          </div>
        </IconButton>
        <IconButton size="small">
          <div className="utility-button-icon">
            <SmsRoundedIcon fontSize="small" />
          </div>
        </IconButton>
        <IconButton size="small">
          <div className="utility-button-icon">
            <NotificationsRoundedIcon fontSize="small" />
          </div>
        </IconButton>
        <IconButton size="small">
          <div className="utility-button-icon">
            <ArrowDropDownRoundedIcon fontSize="large" />
          </div>
        </IconButton>
      </div>
    </div>
  );
};

export default SettingsUtility;
