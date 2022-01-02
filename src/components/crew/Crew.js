import React, { useState, useEffect } from "react";
import "./crew.css";
import { useParams } from "react-router-dom";
import { Title, SlideButton } from "..";
import {
  anoushehPng,
  anoushehWebp,
  douglasPng,
  douglasWebp,
  markPng,
  markWebp,
  victorPng,
  victorWebp,
} from "../../assets/crew";
const crews = [
  {
    name: "Douglas Hurley",
    images: {
      png: douglasPng,
      webp: douglasWebp,
    },
    role: "Commander",
    bio:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: markPng,
      webp: markWebp,
    },
    role: "Mission Specialist",
    bio:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: victorPng,
      webp: victorWebp,
    },
    role: "Pilot",
    bio:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: anoushehPng,
      webp: anoushehWebp,
    },
    role: "Flight Engineer",
    bio:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function Crew() {
  const [name, setName] = useState("Douglas Hurley");
  const [png, setPng] = useState(douglasPng);
  const [webp, setWebp] = useState(douglasWebp);
  const [role, setRole] = useState("Commander");
  const [bio, setBio] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );

  const { firstname } = useParams();

  useEffect(() => {
    const { name, images, role, bio } = crews.filter((crew) =>
      crew.name.toLowerCase().includes(firstname)
    )[0];

    const { png, webp } = images;

    setName(name);
    setPng(png);
    setWebp(webp);
    setRole(role);
    setBio(bio);
  }, [firstname]);

  return (
    <main className="grid-container grid-crew">
      <Title number="02" title="Meet your crew" />

      <picture className="img">
        <source srcSet={webp} />
        <img src={png} alt={name} />
      </picture>

      <div className="dot-indicators flex">
        <SlideButton title="Douglas" />
        <SlideButton title="Mark" />
        <SlideButton title="Victor" />
        <SlideButton title="Anousheh" />
      </div>

      <article className="text">
        <h2 className="text-white fs-600 uppercase ff-serif">
          <span className="d-block fs-400">{role}</span>
          {name}
        </h2>
        <p className="text-accent">{bio}</p>
      </article>
    </main>
  );
}

export default Crew;
