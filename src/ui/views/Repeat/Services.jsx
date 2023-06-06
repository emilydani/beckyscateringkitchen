import React from "react";

export default function Services() {

  return (
    <div className="container">
        <div className="services__grid">
            <div className="services__img"></div>
            <div>
                <h2>Additional Service Options</h2>
                <h3>Deliver order to venue- $50</h3>
                <h3>Deliver and set up food display at venue- $200</h3>

                <h3 className="services__heading-margin">Full service buffet- $500</h3>
                <p className="services__p-margin">Includes: delivery, set up buffet, service event & clean up</p>

                <h3 className="services__heading-margin">Full service plated meal- $800</h3>
                <p className="services__p-margin">Includes: delivery, plate and serve meals, wait tables & clean up</p>
            </div>
        </div>
        
    </div>
    
  );
}