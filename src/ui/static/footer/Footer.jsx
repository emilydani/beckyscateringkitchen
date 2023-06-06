import React from 'react';
import lightLogo from "../../../assets/light-logo.png";

function Footer(props) {
  return (
    <div>
        <div className="footer__dark-container">
          <div className="footer__flex">
            <img src={lightLogo} alt="Becky's Catering Kitchen" />
            <p>
              <a href="/">Home</a> | 
              <a href="/lunch-menu"> Lunch Menu</a> | 
              <a href="/dinner-menu"> Dinner Menu</a> |
              <a href="/reception-food"> Reception Food</a> | 
              <a href="/drinks"> Drinks</a> | 
              <a href="/cheesecake"> Cheesecake</a> | 
              <a href="/contact"> Contact</a>
            </p>
          </div>
          
        </div>
        <div className="footer__blue-container">
          <p>All rights reserved. Copyright © Becky's Catering Kitchen</p>
        </div>
    </div>
  );
}
export default Footer;