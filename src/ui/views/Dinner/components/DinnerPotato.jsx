import React from "react";

export default function DinnerPotato() {

  return (
    
    <div className="container lunch__soup-padding" id="veggies">
        <h2 className="lunch__soup-heading">Vegetable Options</h2>
        <div className="big-box">
        <h3>Potato Sides</h3>
            <div className="big-box__grid">
                <ul>
                    <li>Stand Alone Cheesy Garlic Mashed Potatoes</li>
                    <li>Garlic Mashed Potato w/ Brown Gravy</li>
                    <li>Parmesan Rosemary Roasted Baby Potatoes</li>
                    <li>Roasted Onion Potatoes</li>
                </ul>
                <ul>
                    <li>Baked Potatoes w/ the Works</li>
                    <li>Au Gratin Potatoes</li>
                    <li>Potato Casserole (Funeral Potatoes)</li>
                    <li>Rice Pilaf</li>
                </ul>
            </div>
            <div className="red-line"></div>
            <p>
                Full Pan- $100, Serves 50-60 <br></br>
                Half Pan- $50, Serves 25-30
            </p>
            
        </div>        <br/><br/>

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Vegetable Medley</h3>
                <div className="blue-line"></div>
                <p>
                Fresh broccoli, cauliflower, carrots and red bell peppers tossed in olive oil and seasoning.
                </p>
                <p>
                Full Pan- $80, Serves 40-50 <br></br>
                Half Pan- $40, Serves 20-25
                </p>
            </div>            
            <div className="dinner__side-veg food__image-img"></div>            
        </div>
        <br></br>   
        <div className="food__two-grid">
            <div className="food__two-grid-box">
                <h3>Steamed Broccoli</h3>
                <div className="blue-line"></div>
                <p>
                Fresh broccoli, steamed then tossed with garlic salt mix, pepper & olive oil.  Finished in the oven to temp!
                </p>
                <p>
                Full Pan- $80, Serves 40-50 <br></br>
                Half Pan- $40, Serves 20-25
                </p>
            </div>
            <div className="food__two-grid-box">
                <h3>Sweet Butter Corn</h3>
                <div className="blue-line"></div>
                <p>
                Delicious sweet white corn that is steamed in butter to perfections. 
                </p>
                <p>
                Full Pan- $70, Serves 40 <br></br>
                Half Pan- $35, Serves 20
                </p>
            </div>            
        </div>
        <br></br>

               

        <div className="food__image-grid">            
            <div className="dinner__side-green-beans food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Roasted Green Beans</h3>
                <div className="blue-line"></div>
                <p>
                Tender, crisp, fresh, French, green beans, tossed w/ garlic, parmesan, olive oil, & seasoned to  taste.
                </p>
                <p>
                Full Pan- $80, Serves 40-50 <br></br>
                Half Pan- $40, Serves 20-25
                </p>
            </div>            
        </div>
        <br></br>
        
      
    </div>
  );
}