import React from 'react';
import './OrderCard.scss';

const OrderCard = () => {
  return (
    <div className='order-container'>
      <div className='order-number'>
        <span className="order-text">Order</span>
        <span className="order-id">#7804GNZ</span>
      </div>
      <div className="order-card">
        <div className='order-status'>
          <div className='order-left'>
            <img src="/assets/fcl.svg" alt="icon" />
            <span className="order-type">FCL</span>
          </div>
          <div className='order-right'>
            <div className='order-point'></div>
            <span className="status-dot">In transit</span>
          </div>
        </div>
        <div className='order-transit'>
          <div className='order-pickup'>
            <img className='pickup-img' src="/assets/pickup.svg" alt="icon" />
            <div className='event-info'>
              <span className="event-status">PICKUP</span>
              <span className="event-location">New York</span>
              <span className="event-address">25 Mortada street, Gainalkes...</span>
            </div>
            <div className='event-date-time'>
              <span className="event-date">01/04/23</span>
              <span className="event-time">10:45</span>
            </div>
          </div>
          <div className='order-dropoff'>
            <img className='location-img' src="/assets/location.svg" alt="icon" />
            <div className='event-info'>
              <span className="event-status">DROPOFF</span>
              <span className="event-location">New York</span>
              <span className="event-address">1789 NJ-27, Edison, 08817...</span>
            </div>
            <div className='event-date-time'>
              <span className="event-date">01/04/23</span>
              <span className="event-time">17:30</span>
            </div>
          </div>
        </div>
        <div className="order-actions">
          <button className="action-pickup">Its time for pickup</button>
          <button className="action-resume">Resume
            <img className='action-img' src="/assets/eye.png" alt="icon" />
          </button>
        </div>
      </div>
      <div className='order-number'>
        <span className="order-text">Order</span>
        <span className="order-id">#ASI890EY4</span>
      </div>
      <div className="order-card">
        <div className='order-status'>
          <div className='order-left'>
            <img src="/assets/ftl.svg" alt="icon" />
            <span className="order-type">FTL</span>
          </div>
          <div className='order-right'>
            <span className="status-dot">Assigned</span>
          </div>
        </div>
        <div className='order-transit'>
          <div className='order-pickup'>
            <img className='pickup-img' src="/assets/pickup.svg" alt="icon" />
            <div className='event-info'>
              <span className="event-status">PICKUP</span>
              <span className="event-location">New York</span>
              <span className="event-address">25 Mortada street, Gainalkes...</span>
            </div>
            <div className='event-date-time'>
              <span className="event-date">02/04/23</span>
              <span className="event-time">09:50</span>
            </div>
          </div>
          <div className='order-dropoff'>
            <img className='location-img' src="/assets/location.svg" alt="icon" />
            <div className='event-info'>
              <span className="event-status">DROPOFF</span>
              <span className="event-location">New York</span>
              <span className="event-address">1789 NJ-27, Edison, 08817...</span>
            </div>
            <div className='event-date-time'>
              <span className="event-date">03/04/23</span>
              <span className="event-time">12:30</span>
            </div>
            
          </div>
        </div>
        <div className="order-actions-done">
          <button className="action-resume">Resume
            <img className='action-img' src="/assets/eye.png" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;