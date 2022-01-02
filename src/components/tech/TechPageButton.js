import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function TechPageButton({ page, pageName }) {
  const navigate = useNavigate();
  const { tech } = useParams();

  return (
    <button
      className={`${tech === pageName ? "active" : ""}`}
      onClick={() => {
        navigate(`/tech/${pageName.toLowerCase()}`);
      }}
    >
      <span>{page}</span>
    </button>
  );
}

export default TechPageButton;
