import React from "react";
import Header from "../Header/Header";
import TabNavigation from "../TabNavigation/TabNavigation";
import SearchBox from "../SearchBox/SearchBox";
import OrderCard from "../OrderCard/OrderCard";
import "./CargoOrders.scss";


const CargoOrders = () => {
  return (
    <div className="cargo-orders">
      <Header text="Cargo Orders" />
      <TabNavigation />
      <SearchBox />
      <OrderCard />
    </div>
  );
}

export default CargoOrders;