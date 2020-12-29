import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import "./settingsUtility.css";
import { useStateValue } from "../../StateProvider";

const SettingsUtility = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="settings-utility">
      <div className="user-info">
        <div className="user-info-holder">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
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
