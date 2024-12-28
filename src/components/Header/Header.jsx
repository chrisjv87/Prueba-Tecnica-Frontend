import React from "react";
import "./Header.scss";

const Header = ({ text } ) => {
  return(
    <div className="header-container">
      <img src="/assets/prev.png" alt="Previous Icon" className="prev-image" />
      <span className="title">{text}</span>
      <img src="/assets/notification.svg" alt="Notification Icon" className="notification-svg" />
    </div>
  );
}

export default Header;