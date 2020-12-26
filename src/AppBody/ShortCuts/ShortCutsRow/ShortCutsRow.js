import React from "react";
import "./ShortCutsRow.css";
import Avatar from "@material-ui/core/Avatar";

const ShortCutsRow = ({
  title,
  Icon,
  userImgUrl,
  imgUrl,
  onClick,
  imageStyling,
  fontSize,
  fontWeight,
}) => {
  return (
    <button className="short-cuts-row" onClick={onClick}>
      {userImgUrl && <Avatar src={userImgUrl} />}
      {imgUrl && <img src={imgUrl} alt="" style={imageStyling} />}
      {Icon && (
        <div className="short-cuts-icon">
          <Icon />
        </div>
      )}
      <p style={{ fontSize: fontSize, fontWeight: fontWeight }}>{title}</p>
    </button>
  );
};

export default ShortCutsRow;
