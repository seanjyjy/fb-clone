import React from "react";
import "./header.css";
import Search from "./Search/Search";
import Tabs from "./Tabs/Tabs";
import UtilityButtons from "./SettingsUtility/SettingsUtility";

const Header = () => {
  return (
    <div className="header">
      <Search />
      <Tabs />
      <UtilityButtons />
    </div>
  );
};

export default Header;
