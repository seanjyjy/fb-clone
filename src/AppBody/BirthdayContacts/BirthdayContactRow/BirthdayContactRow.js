import React from "react";
import "./BirthdayContactRow.css";

const BirthdayContactRow = ({ CircleIcon, Icon, name, isBirthDay }) => {
  const birthdayStatement = isBirthDay ? "'s birthday is today." : "";
  return (
    <div className="birthday-contact-row">
      {CircleIcon && CircleIcon}
      {Icon && <Icon style={{ color: "#1E93F7" }} />}
      <p>{`${name}${birthdayStatement}`}</p>
    </div>
  );
};

export default BirthdayContactRow;
