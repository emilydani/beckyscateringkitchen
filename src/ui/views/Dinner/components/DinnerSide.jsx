import React from "react";

export default function DinnerSide() {

  return (
    
    <div className="container lunch__soup-padding" id="sides">
        <h2 className="lunch__soup-heading">Side Dishes</h2>

        <div className="food__image-grid">            
            <div className="dinner__side-beans food__image-img"></div>
            <div className="food__image-text-box">                
                <h3>Becky's Baked Beans</h3>
                <div className="blue-line"></div>
                <p>
                Sweet BBQ flavors, combined with ground beef, bacon and 5 different types of beans.  Delicious!
                </p>
                <p>
                Full Pan- $90, Serves 50-60 <br></br>
                Half Pan- $45, Serves 25-30
                </p>
            </div>
        </div> 
        <br></br>  
        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Mac N' Cheese</h3>
                <div className="blue-line"></div>
                <p>
                A rich, creamy blend of cheeses and pasta, providing that perfect comfort food that the adults enjoy just as much as the kids.
                </p>
                <p>
                Full Pan- $150, Serves 50-60 <br></br>
                Half Pan- $75, Serves 25-30
                </p>
            </div>             
            <div className="dinner__side-mac food__image-img"></div>              
        </div>
        <br></br>
        <div className="food__two-grid">
            <div className="food__two-grid-box">
                <h3>Rice Pilaf</h3>
                <div className="blue-line"></div>
                <p>
                Yummy rice dish that will satisfy any customer.
                </p>
                <p>
                Full Pan- $100, Serves 50-60 <br></br>
                Half Pan- $50, Serves 25-30
                </p>
            </div>
            <div className="food__two-grid-box">
                <h3>Dinner Rolls</h3>
                <div className="blue-line"></div>
                <p><i>These are what are served with the meals unless otherwise requested</i></p>    
                <ul>
                    <li>Albertson&#39;s Home Style Dinner Rolls- $5 a dozen</li>
                </ul><br/>
                <p>Other option:</p>
                <ul>
                    <li>Homemade Butter Dinner Rolls- $8 a dozen</li>
                </ul>
            </div>
                        
        </div>
        
      
    </div>
  );
}