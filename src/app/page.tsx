/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import "./page.css";

// Types for better type safety
type DestinationKey = "moon" | "mars" | "europa" | "titan";
type CrewKey = "commander" | "specialist" | "pilot" | "engineer";
type TechnologyKey = "launch" | "capsule" | "spaceport";
type TabKey = "00" | "01" | "02" | "03";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("00");
  const [activeDestination, setActiveDestination] = useState<DestinationKey>("moon");
  const [activeCrew, setActiveCrew] = useState<CrewKey>("commander");
  const [activeTechnology, setActiveTechnology] = useState<TechnologyKey>("launch");

  // Data configurations
  const destinations: Record<DestinationKey, Destination> = {
    moon: {
      name: "MOON",
      description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    mars: {
      name: "MARS",
      description: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    europa: {
      name: "EUROPA",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    titan: {
      name: "TITAN",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    }
  };

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

  // Event handlers
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTab("00");
  };

  const handleNavClick = (tabNumber: TabKey) => {
    setActiveTab(tabNumber);
    setMenuOpen(false);
  };

  const handleDestinationClick = (destination: DestinationKey) => {
    setActiveDestination(destination);
  };

  const handleCrewClick = (crew: CrewKey) => {
    setActiveCrew(crew);
  };

  const handleTechnologyClick = (technology: TechnologyKey) => {
    setActiveTechnology(technology);
  };

  // Helper functions for rendering lists
  const renderNavItems = () => {
    const tabs: TabKey[] = ["00", "01", "02", "03"];
    const labels = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
    
    return tabs.map((tab, index) => (
      <li 
        key={tab}
        className={activeTab === tab ? "active" : ""}
        onClick={() => handleNavClick(tab)}
      >
        <span>{tab}</span> {labels[index]}
      </li>
    ));
  };

  const renderDestinationTabs = () => {
    return (Object.keys(destinations) as DestinationKey[]).map((key) => (
      <button
        key={key}
        className={`destination-tab ${activeDestination === key ? 'active' : ''}`}
        onClick={() => handleDestinationClick(key)}
      >
        {destinations[key].name}
      </button>
    ));
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
  const currentDestination = destinations[activeDestination];
  const currentCrew = crewMembers[activeCrew];
  const currentTechnology = technologies[activeTechnology];

  return (
    <main className={`hero ${menuOpen ? "menu-open" : ""}`}>
      <div className="content-wrapper">
        {/* NAVBAR */}
        <nav className="navbar">
          <div 
            className="navbar__logo" 
            onClick={handleLogoClick}
          >
            ✦
          </div>

          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {renderNavItems()}
          </ul>
        </nav>

        {/* HOME CONTENT */}
        <section 
          id="home" 
          style={{ display: activeTab === "00" ? 'flex' : 'none' }} 
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
        
        {/* DESTINATION CONTENT */}
        <section 
          id="destination" 
          style={{ display: activeTab === "01" ? 'block' : 'none' }} 
          className="destination-content"
        >
          <div className="page-heading">
            <span>01</span> PICK YOUR DESTINATION
          </div>

          <div className="destination-main">
            <div className="destination-image">
              <div className="planet-image moon"></div>
            </div>

            <div className="destination-info">
              <div className="destination-nav">
                {renderDestinationTabs()}
              </div>

              <h1>{currentDestination.name}</h1>
              
              <p className="destination-description">
                {currentDestination.description}
              </p>

              <div className="destination-stats">
                <div className="stat">
                  <div className="stat-label">AVG. DISTANCE</div>
                  <div className="stat-value">{currentDestination.distance}</div>
                </div>
                <div className="stat">
                  <div className="stat-label">EST. TRAVEL TIME</div>
                  <div className="stat-value">{currentDestination.travelTime}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CREW CONTENT */}
        <section 
          id="crew" 
          style={{ display: activeTab === "02" ? 'block' : 'none' }} 
          className="crew-content"
        >
          <div className="page-heading">
            <span>02</span> MEET YOUR CREW
          </div>

          <div className="crew-main">
            <div className="crew-info">
              <div className="crew-role">{currentCrew.role}</div>
              <h1 className="crew-name">{currentCrew.name}</h1>
              <p className="crew-description">
                {currentCrew.description}
              </p>
              
              <div className="crew-nav">
                {renderCrewDots()}
              </div>
            </div>

            <div className="crew-image">
              <img 
                src={currentCrew.image} 
                alt={currentCrew.name}
                className="crew-portrait"
              />
            </div>
          </div>
        </section>
        
        {/* TECHNOLOGY CONTENT */}
        <section 
          id="technology" 
          style={{ display: activeTab === "03" ? 'block' : 'none' }} 
          className="technology-content"
        >
          <div className="page-heading">
            <span>03</span> SPACE LAUNCH 101
          </div>

          <div className="technology-main">
            <div className="technology-info">
              <div className="technology-subheading">THE TERMINOLOGY...</div>
              
              <div className="technology-content-wrapper">
                <div className="technology-nav">
                  {renderTechnologyNumbers()}
                </div>

                <div className="technology-details">
                  <div className="technology-name">{currentTechnology.name}</div>
                  <h1 className="technology-title">{currentTechnology.title}</h1>
                  <p className="technology-description">
                    {currentTechnology.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="technology-image">
              <div className={`technology-visual ${currentTechnology.image}`}></div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
