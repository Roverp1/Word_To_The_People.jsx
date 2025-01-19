import { Outlet } from "react-router";

import Header from "./components/widgets/header/header";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
