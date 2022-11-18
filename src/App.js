import "./App.scss";
import { Outlet } from "react-router";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
