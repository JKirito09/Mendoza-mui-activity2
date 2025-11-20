"use client";
import React, { useState } from "react";
import Image from "next/image";





 
    const Crew = () => {
    return (
        <section id="crew" 
                  className="crew-content"
                >
                  <div className="page-heading">
                    <span>02</span> MEET YOUR CREW
                  </div>
        
                  <div className="crew-main">
                    <div className="crew-info">
                      <div className="crew-role">Engineer</div>
                      <h1 className="crew-name">Jhon</h1>
                      <p className="crew-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, tenetur rerum mollitia architecto nostrum ad in neque! Dolorem officiis similique, deserunt cumque veniam odio assumenda omnis, placeat esse possimus voluptates?
                      </p>
                      
                      <div className="crew-nav">
                    
                      </div>
                    </div>
        
                    <div className="crew-image">
                      {/* <Image
                        width={300}
                        height={300} 
                        src={`/image.png`} 
                        alt={currentCrew.name}
                        className="crew-portrait"
                      /> */}
                    </div>
                  </div>
                </section>
    )}

    export default Crew;