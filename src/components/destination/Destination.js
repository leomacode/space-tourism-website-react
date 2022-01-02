import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Title, NavButton } from "..";
import "./destination.css";
import {
  moonWebp,
  moonPng,
  marsWebp,
  marsPng,
  europaWebp,
  europaPng,
  titanWebp,
  titanPng,
} from "./../../assets/destination";

const destinations = [
  {
    name: "Moon",
    images: {
      png: moonPng,
      webp: moonWebp,
      moonPng,
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: marsWebp,
      webp: marsPng,
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: europaPng,
      webp: europaWebp,
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: titanPng,
      webp: titanWebp,
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

function Destination() {
  const [name, setName] = useState("Moon");
  const [png, setPng] = useState(moonPng);
  const [webp, setWebp] = useState(moonWebp);
  const [description, setDescription] = useState(
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
  );
  const [distance, setDistance] = useState("384,400 km");
  const [travel, setTravel] = useState("3 days");
  const { star } = useParams();

  useEffect(() => {
    const { name, images, description, distance, travel } = destinations.filter(
      (des) => des.name.toLocaleLowerCase() === star
    )[0];

    const { png, webp } = images;

    setName(name);
    setPng(png);
    setWebp(webp);
    setDescription(description);
    setDistance(distance);
    setTravel(travel);
  }, [star]);

  return (
    <main className="container">
      <Title number="01" title="Pick your destination" />

      <div className="content">
        <picture className="img">
          <source srcSet={webp} />
          <img src={png} alt={name} />
        </picture>

        <div className="main-content">
          <div className="tab-list underline-indicators flex">
            <NavButton pageName="moon" />
            <NavButton pageName="mars" />
            <NavButton pageName="europa" />
            <NavButton pageName="titan" />
          </div>
          <div className="text">
            <h2 className="text-white fs-800 uppercase ff-serif">{name}</h2>

            <p className="text-accent">{description}</p>
          </div>

          <div className="figures flex">
            <div className="figure">
              <h3 className="text-accent fs-200 uppercase ff-serif">
                Avg. distance
              </h3>
              <p className="text-white uppercase fs-500 ff-serif">{distance}</p>
            </div>
            <div className="figure">
              <h3 className="text-accent fs-200 uppercase ff-serif">
                Est. travel time
              </h3>
              <p className="text-white uppercase fs-500 ff-serif">{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
