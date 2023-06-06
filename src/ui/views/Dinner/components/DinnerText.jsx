import React from "react";

export default function DinnerText() {
  return (
    <div className="container">
      <div className="menuCont">
        <div className="menu">
          <h3>Dinner Menu Catagories</h3>
          <div className="red-line"></div>
          <a href="#buffet">Buffet Style</a>
          <br />
          <a href="#main-course">Main Courses</a>
          <br />
          <a href="#sides">Side Dishes</a>
          <br />
          <a href="#veggies">Vegetable Options</a>
          <br />
          <a href="#soups">Soups</a>
          <br />
          <a href="#salad">Salads</a>
          <br />
          <a href="#dessert">Dessert</a>
          <br />
        </div>
        <div className="textCont">
          <h1>Personalized Dinner Menus</h1>
          <p>
            Any occasion is only as great as the food served! Becky's Catering
            Kitchen offers delicious buffets, main meals, side dishes, soups,
            and desserts.
          </p>{" "}
          <p>
            I will cater to your individual needs, providing a delicious menu
            that looks and tastes like it is made with love by your own personal
            chef. Check out some of the most popular items I've made for
            clients.
          </p>
          <br></br>
          <div>
            <a href="/contact" className="red-button">
              Call Today!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
