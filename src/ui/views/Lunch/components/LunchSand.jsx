import React from "react";

export default function LunchSand() {
  return (
    <div className="container lunch__soup-padding" id="sandwhiches">
      <h2 className="lunch__soup-heading">Sandwiches</h2>

      <div className="food__two-grid">
        <div className="food__two-grid-box">
          <h3>Real Carolina Pulled Pork Sandwiches</h3>
          <div className="blue-line"></div>
          <p>
            Pork Butt marinated in a Carolina Rub, then slow roasted to a tender
            fall apart yumminess!  Served up with a homemade Carolina BBQ Sauce
            and a tangy Poppy Seed Coleslaw to top it, just like it is supposed
            to be done!  Throw it altogether on a hard roll and you will be one
            happy customer!
          </p>
          <p>
            Pulled Pork- $125, Serves 32 <br></br>
            Carolina BBQ Sauce- $8, 2 cups <br></br>
            Tangy Poppy Seed Coleslaw- $25, Serves 32<br></br>
            Hard Rolls- $15 for 5 dozen
          </p>
        </div>
        <div className="food__two-grid-box">
          <h3>Honey BBQ Chicken Sandwiches</h3>
          <div className="blue-line"></div>
          <p>
            Moist shredded chicken dressed in a homemade sweet honey BBQ sauce
            that is lick your lips yummy! Comes in a close second to the
            Carolina Pulled Pork. I love this on a toasted hard roll!
          </p>
          <p>
            Full Pan: $250, Serves 64 <br></br>
            Half Pan: $125, Serves 32
          </p>
        </div>
      </div>
      <br></br>

      <div className="food__image-grid">
        <div className="food__image-text-box">
          <h3>Croissant Sandwiches</h3>
          <div className="blue-line"></div>
          <p>
            Popular croissant sandwiches are chicken salad (a favorite), ham and
            cheese, turkey and cheese, or roast beef and cheese. Croissant
            sandwiches are served with lettuce, tomato and dressing on the side.
          </p>
          <p>
            Large Croissant Sandwiches- $7.00 ea <br></br>
            Cocktail Croissant Sandwiches- $4.00 ea
          </p>
        </div>
        <div className="lunch__salad-croissant food__image-img"></div>
      </div>
      <br></br>

      <div className="food__two-grid">
        <div className="food__two-grid-box">
          <h3>Best Sloppy Joe's Ever</h3>
          <div className="blue-line"></div>
          <p>
            The Best Sloppy Joe's Ever is a sandwich that comes with Grandma
            Sycamore Buns, cheese and pickles.
          </p>
          <p>
            Full Pan- $290, Serves 64 <br></br>
            Half Pan- $145, Serves 32 <br></br>
          </p>
        </div>
        <div className="food__two-grid-box">
          <h3>Chicken Salad Filling</h3>
          <div className="blue-line"></div>
          <p>
            This delicious chicken salad has sweet and crunchy elements, that
            come together for the perfect blend of yummy! Serve on croissants,
            bagels, wraps or rolls.
          </p>
          <p>One Pan- $75, Approx. 10 cups of filling</p>
        </div>
      </div>
      <br></br>

      <div className="food__image-grid">
        <div className="lunch__salad-bread food__image-img"></div>
        <div className="food__image-text-box">
          <h3>Rolls for Sandwiches</h3>
          <div className="blue-line"></div>
          <ul>
            <li>Potato, Dinner or Hard Rolls- $5 Dozen</li>
            <li>Cocktail size Croissants- $7 Dozen</li>
            <li>Large Croissants- $7 a half Dozen</li>
          </ul>
          <i>
            Above rolls ordered from Albertson’s or Broulim’s, to be picked up
            and delivered by me.
          </i>
          <ul>
            <li>Homemade Dinner Rolls- $8 Dozen</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
