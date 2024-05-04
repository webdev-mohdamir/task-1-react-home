import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Outlet />
    </>
  );
}

export default App;
