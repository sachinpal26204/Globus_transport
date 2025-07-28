import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import HOC from "./Component/HOC";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routing/Route";
export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <HOC /> */}
        <AppRoutes/>
      </div>
    </Router>
  );
}
