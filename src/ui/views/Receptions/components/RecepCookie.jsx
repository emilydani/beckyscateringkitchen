import React from "react";

export default function RecepCookie() {

  return (
    
    <div className="container lunch__soup-padding" id="cookies">
        <h2 className="lunch__soup-heading">Cookies</h2>

        <div className="food__image-grid">            
            <div className="recep__cookie-thumb food__image-img"></div>
            <div className="food__image-text-box">                
                <h3>Thumb Print Cookies</h3>
                <div className="blue-line"></div>
                <p>
                    Shortbread cookie rolled in toasted pecans, baked with a thumbprint and topped with a yummy raspberry filling.
                </p>
                <p>
                    $40 for 48 count                 
                </p>
            </div>
        </div> 
        <br></br>  

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Mini Chocolate Chip Cookies</h3>
                <div className="blue-line"></div>
                <p>
                Mini chocolate chip cookies sprinkled with the perfect amount of kosher salt to make the flavor pop!  You will love the flavors and they are really cute!                
                </p>
                <p>
                $75 for 200 count                 
                </p>
            </div>            
            <div className="recep__cookie-mini food__image-img"></div>            
        </div>
        <br></br>  

        <div className="food__image-grid">               
            <div className="recep__cookie-macaroon food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Coconut Macaroons</h3>
                <div className="blue-line"></div>
                <p>
                Soft sweet coconut cookies, half dipped, bottom dipped and/or drizzled in a chocolate drizzle.  They look beautiful and taste even better!
                </p>
                <p>
                    $20 for 24 count
                </p>
            </div>               
        </div>
        <br></br> 
      
    </div>
  );
}