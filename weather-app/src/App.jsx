import "./App.css";
import DispalyWeather from "./Components/DisplayWeather";
import Search from "./Components/Search";
import ContextProvider from "./Context/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Search />
        <DispalyWeather />
      </ContextProvider>
    </>
  );
}

export default App;
