import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  const defaultTemplate = [
    {
      name: "Sean",
      profileImg:
        "https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4",
    },
    {
      name: "Ashley",
      profileImg: "https://avatars1.githubusercontent.com/u/65171313?s=100&v=4",
    },
    {
      name: "Keane",
      profileImg: "https://avatars2.githubusercontent.com/u/65328119?s=100&v=4",
    },
    {
      name: "Kenny",
      profileImg: "https://avatars3.githubusercontent.com/u/61320387?s=100&v=4",
    },
    {
      name: "Joe",
      profileImg: "https://avatars3.githubusercontent.com/u/63465551?s=100&v=4",
    },
  ];
  return (
    <div className="story-reel">
      {defaultTemplate.map((data, index) => (
        <Story
          name={data.name}
          profileImg={data.profileImg}
          key={index}
          img={data.profileImg}
        />
      ))}
    </div>
  );
};

export default StoryReel;
