import React from "react";
import "./TrackOrder.scss";

const TrackOrder = () => {
  return(
    <div className="track-order-container">
      <img className="avatar-img" src="/assets/avatar.png" alt="avatar" />
      <div className="track-card">
        <div className="track-time">
          <span className="track-hour">10:30 PM</span>
        </div>
        <div className="track-steps-container">
          <div className="track-steps">
            <img src="/assets/check.svg" alt="check" />
            <span>Created Order</span>
          </div>
          <div className="track-steps">
            <img src="/assets/check.svg" alt="check" />
            <span>Accepted Order</span>
          </div>
          <div className="track-steps">
            <img src="/assets/check.svg" alt="check" />
            <span>Pickup set up by William</span>
          </div>
          <div className="track-steps">
            <img src="/assets/check.svg" alt="check" />
            <span>Pickup Completed</span>
          </div>
        </div>
        <div className="track-order">
          <span>Track Order</span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;