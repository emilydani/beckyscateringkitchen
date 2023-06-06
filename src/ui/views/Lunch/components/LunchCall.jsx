import React from "react";

export default function LunchDinnerMenu() {

  return (
    <div className="home__call-space">
        <div className="home__call-retangle"></div>
        <div className="container">  
            <div className="home__call-container">
                <div className="home__call-text-block">
                    <h2>See The Dinner Menu For More Options </h2>
                    <a href="/contact" className="red-button">Dinner Menu</a>
                </div>
                <div className="lunch__call-img"></div>    
            </div>    
        </div>
    </div>
    
  );
}