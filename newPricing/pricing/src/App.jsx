import { useContext } from "react";
import "./App.css";
import Toggle from "./components/Toggle";
import { Context } from "./Context";
import Packages from "./components/Packages";

function App() {
  return (
    <div class="flex flex-col items-center mt-24">
      <Toggle />
      <Packages />
    </div>
  );
}

export default App;
