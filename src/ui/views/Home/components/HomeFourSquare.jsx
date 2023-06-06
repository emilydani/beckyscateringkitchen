import React from "react";

export default function HomeFourSquare() {

  return (
    
    <div className="container">
      <div className="home__four-square-grid"> 
        <div className="home__four-square-container">
            <div className="home__four-square-text-block">
                <h2>Lunch Menu</h2>
                <div className="blue-line"></div>
                <p>Sandwiches, soups, deli platers, fruit and veggie platers are all delicious lunch items. Give me a call and we'll design a menu for you.</p>
                <a href="/lunch-menu" className="blue-button">Learn More</a>
            </div>
            <div className="home__four-square-lunch-img"></div>    
        </div>
        <div className="home__four-square-container">
            <div className="home__four-square-text-block">
                <h2>Dinner Menu</h2>
                <div className="blue-line"></div>
                <p>From main dishes to desserts, we have it all. I will cater to your individual needs and providing a tasty dinner menu.</p>
                <a href="/dinner-menu" className="blue-button">Learn More</a>
            </div>
            <div className="home__four-square-dinner-img"></div>    
        </div>
        <div className="home__four-square-container">
            <div className="home__four-square-text-block">
                <h2>Reception Food</h2>
                <div className="blue-line"></div>
                <p>I make delicious reception food that will make anyone happy. View some of the items I have made for previous clients.</p>
                <a href="/receptions" className="blue-button">Learn More</a>
            </div>
            <div className="home__four-square-reception-img"></div>    
        </div>
        <div className="home__four-square-container">
            <div className="home__four-square-text-block">
                <h2>Cheesecake</h2>
                <div className="blue-line"></div>
                <p>The cakes I make are real cheesecakes that are baked slowly, to create a smooth, rich texture that will leave you wanting more. </p>
                <a href="/cheesecake" className="blue-button">Learn More</a>
            </div>
            <div className="home__four-square-cake-img"></div>    
        </div>
      </div>
    </div>
  );
}