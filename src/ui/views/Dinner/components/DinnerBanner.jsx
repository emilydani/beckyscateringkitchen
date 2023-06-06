import React from "react";

export default function DinnerBanner() {

  return (
    
    <div className="dinner__banner">
      <div className="dinner__banner-container">
        <div className="dinner__banner-background">
          <h1>DELICIOUS DINNER MENUS</h1>
          <div className="white-line"></div>
        </div>
        <div className="dinner__banner-grid">
          <div className="dinner__banner-box-one"></div>
          <div className="dinner__banner-box-two"></div>
          <div className="dinner__banner-box-three"></div>
          <div className="dinner__banner-box-four"></div>
        </div> 

      </div>
    </div>
  );
}