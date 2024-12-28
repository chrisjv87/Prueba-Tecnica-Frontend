import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import TabNavigation from "./components/TabNavigation/TabNavigation";

function App() {
  return (
    <div className="App">
      <Header text="Cargo Orders" />
      <TabNavigation />
      <SearchBox />
    </div>
  );
}

export default App;
