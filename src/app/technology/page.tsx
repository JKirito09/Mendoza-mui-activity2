"use client";
import React, { useState } from "react";
import Image from "next/image";





 
    const Technology = () => {
    return (
        <section id="technology" 
                  className="technology-content"
                >
                  <div className="page-heading">
                    <span>03</span> SPACE LAUNCH 101
                  </div>
        
                  <div className="technology-main">
                    <div className="technology-info">
                      <div className="technology-role">LAUCH VEHICLE</div>
                      <h1 className="technology-name">SPACEPORT</h1>
                      <p className="technology-description">
                      A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.
                      </p>
                      
                      <div className="technology-nav">
                    
                      </div>
                    </div>
        
                    <div className="technology-image">
                      {/* <Image
                        width={300}
                        height={300} 
                        src={`/image.png`} 
                        alt={currenttechnology.name}
                        className="crew-portrait"
                      /> */}
                    </div>
                  </div>
                </section>
    )}

    export default Technology;