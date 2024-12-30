import React from "react";
import "./Header.scss";
import Image from "../Image/Image";

const Header = ({ text } ) => {
  return(

    <div className="header-container">
      <Image src="/assets/prev.png" alt="Previous Icon" className="prev-image" />
      <span className="title">{text}</span>
      <Image src="/assets/notification.svg" alt="Notification Icon" className="notification-svg" />
    </div>
  );
}

export default Header;