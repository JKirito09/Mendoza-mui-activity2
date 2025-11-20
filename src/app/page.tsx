/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import Image from "next/image";

// Types for better type safety

type CrewKey = "commander" | "specialist" | "pilot" | "engineer";
type TechnologyKey = "launch" | "capsule" | "spaceport";


interface Destination {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
}

interface CrewMember {
  role: string;
  name: string;
  description: string;
  image: string;
}

interface Technology {
  number: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function Home() {
  


  const [activeCrew, setActiveCrew] = useState<CrewKey>("commander");
  const [activeTechnology, setActiveTechnology] = useState<TechnologyKey>("launch");

  // Data configurations

  const crewMembers: Record<CrewKey, CrewMember> = {
    commander: {
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      image: "/images/crew/image-douglas-hurley.png"
    },
    specialist: {
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      image: "specialist"
    },
    pilot: {
      role: "PILOT",
      name: "VICTOR GLOVER",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      image: "pilot"
    },
    engineer: {
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image: "engineer"
    }
  };

  const technologies: Record<TechnologyKey, Technology> = {
    launch: {
      number: "1",
      name: "LAUNCH VEHICLE",
      title: "SPACEPORT",
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
      image: "launch"
    },
    capsule: {
      number: "2",
      name: "SPACECAPSULE",
      title: "CAPSULE",
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: "capsule"
    },
    spaceport: {
      number: "3",
      name: "SPACEPORT",
      title: "LAUNCH VEHICLE",
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: "spaceport"
    }
  };







  const handleCrewClick = (crew: CrewKey) => {
    setActiveCrew(crew);
  };

  const handleTechnologyClick = (technology: TechnologyKey) => {
    setActiveTechnology(technology);
  };


  const renderCrewDots = () => {
    return (Object.keys(crewMembers) as CrewKey[]).map((key) => (
      <button
        key={key}
        className={`crew-dot ${activeCrew === key ? 'active' : ''}`}
        onClick={() => handleCrewClick(key)}
      />
    ));
  };

  const renderTechnologyNumbers = () => {
    return (Object.keys(technologies) as TechnologyKey[]).map((key) => (
      <button
        key={key}
        className={`technology-number ${activeTechnology === key ? 'active' : ''}`}
        onClick={() => handleTechnologyClick(key)}
      >
        {technologies[key].number}
      </button>
    ));
  };

  // Current active data

  const currentCrew = crewMembers[activeCrew];
  const currentTechnology = technologies[activeTechnology];

  return (
    <main >
      <div className="content-wrapper">
        {/* NAVBAR */}
       

        {/* HOME CONTENT */}
        <section 
          id="home" 
          className="hero-content"
        >
          <div className="text-section">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let&apos;s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the
              edge of it. Well sit back, and relax because well give you
              a truly out of this world experience!
            </p>
          </div>
          <div className="explore-btn">EXPLORE</div>
        </section>

      </div>
    </main>
  );
}
