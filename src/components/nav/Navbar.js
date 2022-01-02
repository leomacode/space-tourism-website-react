import React, { useEffect, useState } from "react";
import Logo from "./../../assets/shared/logo.svg";
import Link from "./Link";
import "./navbar.css";

const navInfo = [
  { number: "00", title: "Home", path: "" },
  { number: "01", title: "Destination", path: "destination" },
  { number: "02", title: "Crew", path: "crew" },
  { number: "03", title: "Technolony", path: "tech" },
];

function Navbar() {
  const [dataVisible, setDataVisible] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  useEffect(() => {
    function closeSidebar(e) {
      if (
        dataVisible &&
        !e.target.type &&
        e.target.closest("#primary-navigation") === null
      ) {
        setDataVisible(false);
        setAriaExpanded(false);
      }
    }
    document.addEventListener("click", closeSidebar);
    return () => document.removeEventListener("click", closeSidebar);
  });

  const handleToggle = () => {
    if (dataVisible) {
      setDataVisible(false);
      setAriaExpanded(false);
    } else {
      setDataVisible(true);
      setAriaExpanded(true);
    }
  };

  return (
    <header className="primary-header flex">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <button
        onClick={() => handleToggle()}
        className="mobile-nav-toggle"
        data-visible={dataVisible}
        aria-controls="primary-navigation"
      >
        <span aria-expanded={ariaExpanded} className="sr-only">
          Menu
        </span>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className="primary-navigation underline-indicators flex"
          data-visible={dataVisible}
        >
          {navInfo.map(({ number, title, path }) => (
            <Link key={number} number={number} title={title} path={path} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
