import React from "react";
import "./ShortCuts.css";
import ShortCutsTop from "./ShortCutsTop";
import ShortCutsDivider from "./ShortCutsDivider";
import ShortCutsBot from "./ShortCutsBot";

const ShortCuts = () => {
  return (
    <div className="short-cuts">
      <ShortCutsTop />
      <ShortCutsDivider />
      <ShortCutsBot />
    </div>
  );
};

export default ShortCuts;
