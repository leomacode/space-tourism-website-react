import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./link.css";
function Link({ number, title, path }) {
  let { pathname } = useLocation();
  const pathBranch = pathname.split("/")[1];

  return (
    <li className={pathBranch === path ? "active" : ""}>
      <NavLink
        to={path}
        className="ff-sans-cond text-white letter-spacing-2 uppercase"
      >
        <span aria-hidden="true">{number}</span>
        {title}
      </NavLink>
    </li>
  );
}

export default Link;
