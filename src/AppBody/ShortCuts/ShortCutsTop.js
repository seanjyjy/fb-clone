import React, { useState } from "react";
import ShortCutsRow from "./ShortCutsRow/ShortCutsRow";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import ExpandLessSharpIcon from "@material-ui/icons/ExpandLessSharp";

const ShortCutsTop = () => {
  const [isSeeMore, setIsSeeMore] = useState(false);

  const isSeeMoreFalseDataArray = [0, 1, 2, 3, 4];
  const isSeeMoreTrueDataArray = [
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ];

  const titleAndImgUrl = [
    {
      title: "COVID-19 Information Center",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png",
    },
    {
      title: "Friends",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
    },
    {
      title: "Groups",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
    },
    {
      title: "Marketplace",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
    },
    {
      title: "Videos",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png",
    },
    {
      title: "Ad Center",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/CwKNCefmHON.png",
    },
    {
      title: "Ads Manager",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png",
    },
    {
      title: "Campus",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/29AMNpNZ4Vm.png",
    },
    {
      title: "Crisis Response",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png",
    },
    {
      title: "Events",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png",
    },
    {
      title: "Facebook Pay",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png",
    },
    {
      title: "Favorites",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png",
    },
    {
      title: "Friend Lists",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png",
    },
    {
      title: "Fundraisers",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png",
    },
    {
      title: "Games",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png",
    },
    {
      title: "Gaming Video",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png",
    },
    {
      title: "Jobs",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/DO-SN-shaZL.png",
    },
    {
      title: "Live Videos",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Nl9CPY6q_n-.png",
    },
    {
      title: "Memories",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png",
    },
    {
      title: "Messenger",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png",
    },
    {
      title: "Messenger Kids",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png",
    },
    {
      title: "Most Recent",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png",
    },
    {
      title: "Offers",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png",
    },
    {
      title: "Pages",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
    },
    {
      title: "Recent Ad Activity",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png",
    },
    {
      title: "Saved",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
    },
    {
      title: "Weather",
      imgUrl: "https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png",
    },
  ];

  return (
    <div>
      <ShortCutsRow
        title={"Sean"}
        userImgUrl="https://avatars1.githubusercontent.com/u/65809727?s=460&u=e8b3f29d1c5eaaf52ed909e6b375250477e37a03&v=4"
        fontSize={15}
        fontWeight={600}
      />
      {isSeeMoreFalseDataArray.map((dataIdx, index) => {
        let data = titleAndImgUrl[dataIdx];
        return (
          <ShortCutsRow
            title={data.title}
            imgUrl={data.imgUrl}
            key={index}
            fontSize={15}
            fontWeight={600}
          />
        );
      })}
      {isSeeMore &&
        isSeeMoreTrueDataArray.map((dataIdx, index) => {
          let data = titleAndImgUrl[dataIdx];
          return (
            <ShortCutsRow
              title={data.title}
              imgUrl={data.imgUrl}
              key={index}
              fontSize={15}
              fontWeight={600}
            />
          );
        })}
      <ShortCutsRow
        title={!isSeeMore ? "See More" : "See Less"}
        Icon={!isSeeMore ? ExpandMoreSharpIcon : ExpandLessSharpIcon}
        onClick={() => setIsSeeMore(!isSeeMore)}
        fontSize={15}
        fontWeight={600}
      />
    </div>
  );
};

export default ShortCutsTop;
