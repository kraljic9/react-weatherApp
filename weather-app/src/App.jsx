import { useContext } from "react";
import "./App.css";
import DispalyWeather from "./Components/DisplayWeather";
import Search from "./Components/Search";
import ContextProvider from "./Context/ContextProvider";
import { WeatherContext } from "./Context/WeatherContext";

function App() {
  return (
    <>
      <ContextProvider>
        <DispalyWeather />
        <Search />
      </ContextProvider>
    </>
  );
}

export default App;
