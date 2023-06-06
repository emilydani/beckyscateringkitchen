import React from "react";

export default function LunchSide() {

  return (
    
    <div className="container lunch__soup-padding" id="side-dish">
        <h2 className="lunch__soup-heading">Side Dishes</h2>

        <div className="food__image-grid">
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
            <div className="lunch__side-beans"></div>            
        </div>
        <br></br>

        <div className="food__image-grid">            
            <div className="lunch__side-mac food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Mac N' Cheese</h3>
                <div className="blue-line"></div>
                <p>
                    A rich, creamy blend of cheeses and pasta, providing that perfect comfort food that the adults enjoy just as much as the kids.
                </p>
                <p>
                    Full Pan- $150, Serves 50-60<br></br>
                    Half Pan- $75, Serves 25-30
                </p>
            </div>
        </div><br/><br/>
        <div className="food__two-grid">
            <div className="food__two-grid-box">
                <h3>Mac N Cheese Bar-</h3>
                <div className="blue-line"></div>
                <p>
                Take everyone&#39;s favorite comfort food and kick it up a notch!  Choose yummy toppings
to serve atop your Mac.... Sweet Pulled Pork, Butter Grilled Chicken, Garlic Shrimp,
Sauteed Onions, Mushrooms &amp; Asparagus, Bacon Bits, Scallions, Jalapenos, Roasted
Red Peppers, Bleu Cheese, Fritos &amp; Sweet Baby Ray&#39;s BBQ Sauce, or more....the
skies the limit!
                </p>
                <p>
                $15 per person, minimum 40
                </p>
            </div>
                     
        </div>
      
    </div>
  );
}