import React from "react";
import "./TabNavigation.scss";

const TabNavigation = () => {
  return(
    <div className="tab-navigation-container">
      <span className="text upcoming">Upcoming</span>
      <span className="text">Completed</span>
      <span className="text">Past</span>
    </div>
  );
}

export default TabNavigation;