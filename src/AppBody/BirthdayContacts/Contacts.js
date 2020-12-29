import React from "react";
import "./BirthdayContact.css";
import BirthdayContactRow from "./BirthdayContactRow/BirthdayContactRow";
import CircleIcon from "../Component/CircleIcon";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
const Contacts = () => {
  const participants = [
    {
      profileImg:
        "https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4",
      name: "Sean",
    },
    {
      profileImg: "https://avatars1.githubusercontent.com/u/65171313?s=100&v=4",
      name: "Ashley",
    },
    {
      profileImg: "https://avatars2.githubusercontent.com/u/65328119?s=100&v=4",
      name: "Keane",
    },
    {
      profileImg: "https://avatars3.githubusercontent.com/u/61320387?s=100&v=4",
      name: "Kenny",
    },
    {
      profileImg: "https://avatars3.githubusercontent.com/u/63465551?s=100&v=4",
      name: "Joe",
    },
  ];
  return (
    <div>
      <div className="contact-header">
        <div className="contact-holder">
          <h3>Contacts</h3>
        </div>
        <div className="contact-icon-holder">
          <div className="contact-icon-holder-holder">
            <VideoCallOutlinedIcon />
          </div>
          <div className="contact-icon-holder-holder">
            <SearchOutlinedIcon />
          </div>
          <div className="contact-icon-holder-holder">
            <MoreHorizOutlinedIcon />
          </div>
        </div>
      </div>
      {participants.map((data, index) => {
        let CircleIconData = <CircleIcon imgUrl={data.profileImg} />;
        return (
          <BirthdayContactRow
            CircleIcon={CircleIconData}
            name={data.name}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Contacts;
