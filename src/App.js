import Header from "./components/Header/Header";
import OrderCard from "./components/OrderCard/OrderCard";
import SearchBox from "./components/SearchBox/SearchBox";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header text="Cargo Orders" />
      <TabNavigation />
      <SearchBox />
      <OrderCard />
    </div>
  );
}

export default App;
