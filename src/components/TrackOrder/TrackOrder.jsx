import React from "react";
import "./TrackOrder.scss";
import Image from "../Image/Image";

const TrackOrder = () => {
  return(
    <div className="track-order-container">
      <Image className="avatar-img" src="/assets/avatar.png" alt="avatar"/>
      <div className="track-card">
        <div className="track-time">
          <span className="track-hour">10:30 PM</span>
        </div>
        <div className="track-steps-container">
          <div className="track-steps">
            <Image src="/assets/check.svg" alt="check" />
            <span className="step-created">Created Order</span>
          </div>
          <div className="track-steps">
            <Image src="/assets/check.svg" alt="check" />
            <span className="step-accepted">Accepted Order</span>
          </div>
          <div className="track-steps">
            <Image src="/assets/check.svg" alt="check" />
            <span className="step-pickup-by">Pickup set up by William</span>
          </div>
          <div className="track-steps">
            <Image src="/assets/waiting.svg" alt="check" />
            <span className="step-pickup-completed">Pickup Completed</span>
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