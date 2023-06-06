import React from "react";

export default function RecepFruit() {

  return (
    
    <div className="container lunch__soup-padding" id="fruit-veggies">
        <h2 className="lunch__soup-heading">Fruit & Veggies</h2>

        <div className="food__image-grid">            
            <div className="recep__fruit-veggie food__image-img"></div>
            <div className="food__image-text-box">                
                <h3>Veggie Platter</h3>
                <div className="red-line"></div>
                <p>
                Veggie platters have baby carrots, celery sticks, cherry tomatoes, cauliflower, olives, and baby dill pickles—unless otherwise requested. It is served with ranch dip.
                </p>
                <p>
                One Platter- $70, Serves 35-50                 
                </p>
            </div>
        </div> 
        <br></br>  

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Fruit Platter</h3>
                <div className="red-line"></div>
                <p>
                Choose 3-4 fresh fruit of the season, strawberries, grapes, pineapple, melons, apples or oranges. Comes with a fruit dip upon request.
                </p>
                <p>
                One Platter- $80, Serves 40-50                 
                </p>
            </div>            
            <div className="recep__fruit-fruit food__image-img"></div>            
        </div>
        <br></br>  

        <div className="food__image-grid">               
            <div className="recep__fruit-cup food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Veggie Cups</h3>
                <div className="red-line"></div>
                <p>
                A fun way to present your crisp vegetable sticks that will encourage your guests to take a healthy snack to enjoy for the evening.... of course the ranch dip is included!
                </p>
                <p>
                    $75 for 50 count
                </p>
            </div>               
        </div>
        <br></br> 

        <div className="food__image-grid">            
            <div className="food__image-text-box">                
                <h3>Fruit and Cheese Kabobs</h3>
                <div className="red-line"></div>
                <p>
                Combine 3 seasonal fruits and 2 cheeses to make a colorful delicious bite. The kabobs are placed on a watermelon to make a fun presentation. 
                </p>
                <p>
                    $75 for 50 count
                </p>
            </div>
            <div className="recep__fruit-kabob food__image-img"></div>
        </div> 
        <br></br> 
      
    </div>
  );
}