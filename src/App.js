import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Home, Crew, Destination, Tech } from "./components";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

function App() {
  const [backGroundClass, setBackGroundClass] = useState("home");
  const { pathname } = useLocation();

  useEffect(() => {
    let path = pathname.split("").slice(1).join("");
    if (!path) {
      path = "home";
    }

    if (path.includes("destination")) {
      path = "destination";
    }

    if (path.includes("crew")) {
      path = "crew";
    }

    setBackGroundClass(path);
  }, [pathname]);

  return (
    <div className={`App ${backGroundClass}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="destination"
          element={<Navigate replace to="/destination/moon" />}
        />
        <Route path="destination/:star" element={<Destination />} />

        <Route path="crew" element={<Navigate replace to="/crew/douglas" />} />
        <Route path="crew/:firstname" element={<Crew />} />

        <Route
          path="tech"
          element={<Navigate replace to="/tech/launch-vehicle" />}
        />
        <Route path="tech/:tech" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
