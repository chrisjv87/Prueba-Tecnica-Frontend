import React from "react";
import './OrderTrace.scss';
import Image from '../Image/Image';

const OrderTrace = () => {
  return (
    <div className="order-trace-container">
      <div className='order-trace'>
        <div>
          <span className="order-reference">Referencia A1180</span>
        </div>
        <div>
          <span className="order-id">Order #7804GNZ</span>
        </div>
      </div>
      <div className="orders">
        <div className='order-pickup'>
          <Image className='pickup-img' src="/assets/pickup.svg" alt="icon" />
          <div className='event-info'>
            <span className="event-status">PICKUP</span>
            <span className="event-location">New York</span>
            <span className="event-address">25 Mortada street, Gainalkes...</span>
            <div className="event-state-trace">
              <div className='order-accepted'></div>
              <span className="event-state">Accepted</span>
            </div>
          </div>
        </div>
        <div className='order-dropoff'>
          <Image className='onhold-img' src="/assets/onhold.svg" alt="icon" />
          <div className='event-info'>
            <span className="event-status">DROPOFF</span>
            <span className="event-location">New York</span>
            <span className="event-address">1789 NJ-27, Edison, 08817...</span>
            <div className="event-state-trace">
              <div className='order-onhold'></div>
              <span className="event-state">On hold</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrace;