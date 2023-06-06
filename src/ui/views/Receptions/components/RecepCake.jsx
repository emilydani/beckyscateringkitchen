import React from "react";

export default function RecepCake() {

  return (
    
    <div className="container lunch__soup-padding" id="cakes">
        <h2 className="lunch__soup-heading">Cakes</h2>

        <div className="food__image-grid">            
            <div className="recep__cake-bundt food__image-img"></div>
            <div className="food__image-text-box">                
                <h3>Mini Bundt Cakes</h3>
                <div className="red-line"></div>
                <p>
                Choose your favorites… Red velvet w/ cream cheese frosting. Chocolate w/ Oreo crumble. Lemon w/lemon glaze.  Carrot cake w/cream cheese....or any other flavor!  These cute little cakes are a hit!
                </p>
                <p>
                    $40 for 24 count                 
                </p>
            </div>
        </div> 
        <br></br>  

        <div className="food__image-grid">            
            <div className="food__image-text-box">
                <h3>Mini Cupcakes</h3>
                <div className="red-line"></div>
                <p>
                Your choice of cake and color of frosting, decorated elegantly to go with your reception's theme.
                </p>
                <p>
                $50 for 48 count                 
                </p>
            </div>            
            <div className="recep__cake-cupcake food__image-img"></div>            
        </div>
        <br></br>  

        <div className="food__image-grid">               
            <div className="recep__cake-cheese food__image-img"></div>            
            <div className="food__image-text-box">
                <h3>Cheesecake Bites</h3>
                <div className="red-line"></div>
                <p>
                Choose any of the flavors from my cheesecake menu and turn them into bites!  I will bake one and a half recipe, bake in a sheet pan and cut each into 96 pieces and decorated. This takes your Sam's Club cheesecake bites to a whole other level!
                </p>
                <p>
                    $100 for 96 count
                </p>
            </div>               
        </div>
        <br></br> 

        <div className="food__two-grid">
            <div className="food__two-grid-box">
                <h3>Cake Pops</h3>
                <div className="red-line"></div>
                <p>
                Your choice of cake on a stick dipped in white chocolate or chocolate chocolate. Then sprinkled with yummy toppings... toasted coconut, cookie crumbs, drizzle caramel, color sprinkles or crystals, the choices are yours.               
                </p>
                <p>
                    $75 for 48 count
                </p>
            </div>
            <div className="food__two-grid-box">
                <h3>Cake Balls</h3>
                <div className="red-line"></div>
                <p>
                Your choice of flavor, including German chocolate, fudge, yellow cake batter, etc.  Covered in chocolate and decorated beautifully. 
                </p>
                <p>
                    $75 for 100 count
                </p>
            </div>            
        </div>
        <br></br>
      
    </div>
  );
}