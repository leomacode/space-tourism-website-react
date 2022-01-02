import React, { useState, useEffect } from "react";
import { Title, TechPageButton } from "..";
import { useParams } from "react-router-dom";
import {
  vehicleLand,
  vehiclePort,
  spaceCapLand,
  spaceCapPort,
  spaceportLand,
  spaceportPort,
} from "./../../assets/technology";
import "./tech.css";

const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: vehiclePort,
      landscape: vehicleLand,
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: spaceportPort,
      landscape: spaceportLand,
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: spaceCapPort,
      landscape: spaceCapLand,
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Tech() {
  const [name, setName] = useState("Launch vehicle");
  const [portrait, setPortrait] = useState(vehiclePort);
  const [landscape, setLandscape] = useState(vehicleLand);
  const [description, setDescription] = useState(
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  );
  const { tech } = useParams();
  useEffect(() => {
    const term = tech.split("-").pop();
    const { name, images, description } = technology.filter((tech) =>
      tech.name.toLocaleLowerCase().includes(term)
    )[0];
    const { portrait, landscape } = images;
    setName(name);
    setPortrait(portrait);
    setLandscape(landscape);
    setDescription(description);
  }, [tech]);

  return (
    <main className="grid-tech">
      <Title title="SPACE LAUNCH 101" number="03" />

      <picture className="img">
        <source media="(min-width: 45rem)" srcSet={portrait} />
        <img src={landscape} alt="launch-vehicle-landscape" />
      </picture>

      <div className="content">
        <div className="numbers-indicators flex">
          <TechPageButton page="1" pageName="launch-vehicle" />
          <TechPageButton page="2" pageName="spaceport" />
          <TechPageButton page="3" pageName="space-capsule" />
        </div>

        <article>
          <h1 className="ff-sans-cond letter-spacing-2 fs-500 uppercase">
            The terminology...
            <span className="d-block text-white ff-serif fs-600">{name}</span>
          </h1>
          <p>{description}</p>
        </article>
      </div>
    </main>
  );
}

export default Tech;
