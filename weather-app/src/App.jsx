import "./App.css";
import DispalyWeather from "./Components/DisplayWeather";
import Search from "./Components/Search";
import ContextProvider from "./Context/ContextProvider";

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
