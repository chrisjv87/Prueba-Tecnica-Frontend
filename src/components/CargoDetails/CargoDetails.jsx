import React from 'react';
import Header from '../Header/Header';
import './CargoDetails.scss';
import OrderTrace from '../OrderTrace/OrderTrace';

const CargoDetails = () => {
  return (
    <div className="cargo-details">
      <Header text="Cargo Details" />
      <OrderTrace />
    </div>
  );
}

export default CargoDetails;