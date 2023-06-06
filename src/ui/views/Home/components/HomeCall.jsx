import React from "react";

export default function HomeCall() {

  return (
    <div className="home__call-space">
        <div className="home__call-retangle"></div>
        <div className="container">  
            <div className="home__call-container">
                <div className="home__call-text-block">
                    <h2>Delicious Food For Any Occasion</h2>
                    <a href="/contact" className="red-button">Call Today!</a>
                </div>
                <div className="home__call-img"></div>    
            </div>    
        </div>
    </div>
    
  );
}