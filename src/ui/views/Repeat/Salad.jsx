import React from "react";

export default function Salad() {

  return (
    
    <div className="container lunch__soup-padding" id="salad">
        <h2 className="lunch__soup-heading">Salads</h2>

        <div className="food__image-grid">
            <div className="food__image-text-box">
                <h3>Spinach Salad,</h3>
                <h3>Frog Eye Salad,</h3>
                <h3>Potato Salad,</h3>
                <h3>Cookie Salad, or</h3>
                <h3>Garden Salad</h3>
                <div className="red-line"></div>
                <p>Full Pan- $80, Serves 50-60 <br></br> Half Pan- $40, Serves 25-30</p>
            </div>
            <div className="lunch__salad-spinach"></div>            
        </div>
        <br></br>

        <div className="food__image-grid">            
            <div className="lunch__salad-pasta food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Mom's Fruit Salad, or</h3>
                <h3>Broccoli Cauliflower Salad</h3>
                <div className="red-line"></div>
                <p>Full Pan- $100, Serves 50-60 <br></br> Half Pan- $50, Serves 25-30</p>
            </div>
        </div>
        <br></br>
        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Seasonal Fruit Platter</h3>
                <div className="red-line"></div>
                <p>
                    Choose 3-4 fresh fruit of the season, strawberries, grapes, pineapple, melons, apples or oranges. Comes with a fruit dip upon request.                 
                </p>
                <p>
                    One Platter- $80, Serves 40-50 
                </p>
            </div>
            <div className="lunch__platter-fruit food__image-img"></div>
        </div> 
      
    </div>
  );
}