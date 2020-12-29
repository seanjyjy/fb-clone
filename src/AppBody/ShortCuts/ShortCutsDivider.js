import React from "react";

const ShortCutsDivider = () => {
  return (
    <div
      style={{
        height: "10px",
        width: "325px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          backgroundColor: "#3E4042",
          width: "300px",
          height: "1px",
          transform: "translateX(10px)",
        }}
      />
    </div>
  );
};

export default ShortCutsDivider;
