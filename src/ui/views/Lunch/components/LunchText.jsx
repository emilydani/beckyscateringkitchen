import React from "react";

export default function LunchText() {
  return (
    <div className="container">
      <div className="menuCont">
        <div className="menu">
          <h3>Lunch Menu Catagories</h3>
          <div className="red-line"></div>
          <a href="#soups">Soups</a><br/>
          <a href="#salad">Salads</a><br/>
          <a href="#sandwhiches">Sandwiches</a><br/>
          <a href="#platters">Platters</a><br/>
          <a href="#side-dish">Side Dishes</a><br/>
          <a href="#dessert">Dessert</a><br/>
        </div>
        <div className="textCont">
          <h1>Delicious Lunch Menu</h1>
          <p>
            Let me take the stress out of your lunch party and create a tasty
            lunch menu—catered directly to your wants and needs. Along with
            offering lunch items like sandwiches, soups and salads, and fruit
            and veggie platers, anything on the dinner menu can be made for
            lunch. </p><p>If something catches your eye, give me a call and we can
            discuss details.
          </p>
          <br></br>
          <div>
            <a href="/cheesecake" className="red-button">
              Call Today!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
