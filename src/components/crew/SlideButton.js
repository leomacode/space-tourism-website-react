import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function SlideButton({ title }) {
  const navigate = useNavigate();
  const { firstname } = useParams();

  return (
    <button
      onClick={() => navigate(`/crew/${title.toLowerCase()}`)}
      className={firstname === title.toLowerCase() ? "active" : ""}
    >
      <span className="sr-only">{title}</span>
    </button>
  );
}

export default SlideButton;
