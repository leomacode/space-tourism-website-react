import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <main id="main" className="grid-container grid-container--home">
      <div>
        <h1 className="uppercase fs-500 ff-sans-cond letter-spacing-1">
          So, you want to travel to
          <span className="fs-900 ff-serif text-white d-block">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience! Explore
        </p>
      </div>
      <div>
        <Link
          to="destination"
          className="large-button uppercase text-dark bg-white letter-spacing-2 ff-serif"
        >
          Explore
        </Link>
      </div>
    </main>
  );
}

export default Home;
