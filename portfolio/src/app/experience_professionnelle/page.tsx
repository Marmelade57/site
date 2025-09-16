"use client";
import { JSX, ReactElement, useEffect, useState } from "react";

type Experience = {
  titre: string;
  date : string;
  explications: ReactElement;
};

const experiences: Experience[] = [
  {
    titre: "Stagiaire assistante d'éducation",
    date : "10 - 14 février 2020",
    explications: <p>J'ai travaillé sur divers projets frontend.</p>,
  },
  {
    titre: "Stagiaire développeuse web",
    date : "7 avril - 30 mai 2025",
    explications: <p>Gestion de projets agiles pour des clients internationaux.</p>,
  },
];

export default function ExpPro() {
  const [renderedExperience, setRenderedExperience] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setRenderedExperience(renderExperiences(experiences));
  }, []);

  return (
    <div id="parent">
      {renderedExperience}
    </div>
  );
}

function renderSingleExperience(index: number, data: Experience): JSX.Element {
  return (
    <div key={index} id={index.toString()} className="experience-block">
      <div style={{display: "flex"}}>
        <h1 style={{textAlign:"left", margin: "auto",  marginLeft: "0"}}>{data.titre}</h1>
        <p style={{textAlign:"right", margin: "auto", marginLeft: "auto", color:"gray"}}>{data.date}</p>
      </div>
      <div>{data.explications}</div>
    </div>
  );
}

function renderExperiences(data: Experience[]): JSX.Element[] {
  if (data.length === 0) {
    throw new Error("Les données sont vides");
  }

  return data.map((item, index) => renderSingleExperience(index, item));
}
