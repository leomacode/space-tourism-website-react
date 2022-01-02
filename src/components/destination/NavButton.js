import React from "react";
import { useNavigate, useParams } from "react-router-dom";
function NavButton({ pageName }) {
  const navigate = useNavigate();
  const { star } = useParams();
  return (
    <button
      onClick={() => navigate(`/destination/${pageName.toLowerCase()}`)}
      className={`uppercase bg-dark ff-sans-cond letter-spacing-2 text-accent ${
        star === pageName ? "active" : ""
      }`}
    >
      {pageName}
    </button>
  );
}

export default NavButton;
