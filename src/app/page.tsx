/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";
import "./page.css";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={`hero ${menuOpen ? "menu-open" : ""}`}>
      <div className="content-wrapper">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="navbar__logo">✦</div>

          <div
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li className="active">
              <span>00</span> HOME
            </li>
            <li>
              <span>01</span> DESTINATION
            </li>
            <li>
              <span>02</span> CREW
            </li>
            <li>
              <span>03</span> TECHNOLOGY
            </li>
          </ul>
        </nav>

        {/* HERO CONTENT */}
        <div className="hero-content">
          <div className="text-section">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because well give you a truly out of
              this world experience!
            </p>
          </div>

          <div className="explore-btn">EXPLORE</div>
        </div>
      </div>
    </main>
  );
}
