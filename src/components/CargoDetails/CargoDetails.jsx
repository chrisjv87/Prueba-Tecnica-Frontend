import React from 'react';
import Header from '../Header/Header';
import './CargoDetails.scss';
import OrderTrace from '../OrderTrace/OrderTrace';
import TrackOrder from '../TrackOrder/TrackOrder';

const CargoDetails = () => {
  return (
    <div className="cargo-details">
      <Header text="Cargo Details" />
      <OrderTrace />
      <TrackOrder />
    </div>
  );
}

export default CargoDetails;