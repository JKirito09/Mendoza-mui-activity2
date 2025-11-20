"use client";
import React, { useState } from "react";
import Image from "next/image";

type Destination = {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
};

type DestinationKey = "moon" | "mars" | "europa" | "titan";

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
const Destination: React.FC = () => {
  const [currentKey, setCurrentKey] = useState<DestinationKey>("moon");
  const currentDestination = destinations[currentKey];

  const renderDestinationTabs = () => {
    return (
      <div style={{ display: "flex", gap: "1rem" }}>
        {(Object.keys(destinations) as DestinationKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentKey(key)}
            aria-pressed={currentKey === key}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem 0.5rem",
              textDecoration: currentKey === key ? "underline" : "none",
            }}
          >
            {destinations[key].name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="destination" className="destination-content">
      <div className="page-heading">
        <span>01</span> PICK YOUR DESTINATION
      </div>

      <div className="destination-main">
        <div className="destination-image">
          <Image
            width={300}
            height={300}
            src={`/image-${currentDestination.name.toLowerCase()}.png`}
            alt={currentDestination.name}
            className="planet-visual"
          />
        </div>

        <div className="destination-info">
          <div className="destination-nav">{renderDestinationTabs()}</div>

          <h1>{currentDestination.name}</h1>

          <p className="destination-description">{currentDestination.description}</p>

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
  );
};

export default Destination;
