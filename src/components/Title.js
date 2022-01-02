import React from "react";
import "./title.css";
function Title({ number, title }) {
  return (
    <h1 className="numbered-title">
      <span aria-hidden="true">{number}</span>
      {title}
    </h1>
  );
}

export default Title;
