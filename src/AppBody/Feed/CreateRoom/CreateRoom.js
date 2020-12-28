import React from "react";
import "./CreateRoom.css";
import VideoCallRoundedIcon from "@material-ui/icons/VideoCallRounded";
import CircleIcon from "../../Component/CircleIcon";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const CreateRoom = () => {
  const participants = [
    {
      profileImg:
        "https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4",
    },
    {
      profileImg: "https://avatars1.githubusercontent.com/u/65171313?s=100&v=4",
    },
    {
      profileImg: "https://avatars2.githubusercontent.com/u/65328119?s=100&v=4",
    },
    {
      profileImg: "https://avatars3.githubusercontent.com/u/61320387?s=100&v=4",
    },
    {
      profileImg: "https://avatars3.githubusercontent.com/u/63465551?s=100&v=4",
    },
  ];
  return (
    <div className="create-room">
      <div className="create-room-left">
        <div className="create-room-button">
          <VideoCallRoundedIcon />
          <h3>Create Room</h3>
        </div>
      </div>
      <div className="online-people">
        {participants.map((data, index) => (
          <CircleIcon imgUrl={data.profileImg} key={index} />
        ))}
      </div>
      <Fab
        style={{
          backgroundColor: "#3e4042",
          height: 50,
          width: 50,
          marginRight: 10,
        }}
      >
        <NavigateNextIcon style={{ color: "#B7BABC" }} fontSize="large" />
      </Fab>
    </div>
  );
};

export default CreateRoom;
