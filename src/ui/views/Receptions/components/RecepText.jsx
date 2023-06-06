import React from "react";

export default function RecepText() {
  return (
    <div className="container">
      <div className="menuCont">
        <div className="menu">
          <h3>Reception Catagories</h3>
          <div className="red-line"></div>
          <a href="#savory">Savory Food</a>
          <br />
          <a href="#fruit-veggies">Fruits and Veggies</a>
          <br />
          <a href="#cookies">Cookies</a>
          <br />
          <a href="#cakes">Cakes</a>
          <br />
          <a href="#brownies">Brownies</a>
          <br />
          <a href="#dessert">Other Desserts</a>
          <br />
        </div>
        <div className="textCont">
          <h1>Catered Reception Food</h1>
          <p>
            From savory food, to fruits and veggies, to decadent desserts,
            Becky's Catering Kitchen offers it all. These delicious reception
            food that will leave you wanting more. 
            </p><p>
            Listed below are reception
            food I've made for previous clients. If something catches your eye,
            give me a call and we can talk details. We'll design a custom
            reception menu specifically for you.{" "}
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
