import React from "react";
import "./BirthdayContact.css";
import BirthdayContactRow from "./BirthdayContactRow/BirthdayContactRow";
import CakeOutlinedIcon from "@material-ui/icons/CakeOutlined";

const Birthday = () => {
  return (
    <div className="birthday">
      <h3>Birthdays</h3>
      <BirthdayContactRow
        name="Sean Lum"
        isBirthDay={true}
        Icon={CakeOutlinedIcon}
      />
    </div>
  );
};

export default Birthday;
