import React from "react";
import { Helmet } from "react-helmet";

import HomeBanner from "./components/HomeBanner";
import HomeCall from "./components/HomeCall";
import HomeFourSquare from "./components/HomeFourSquare";
import HomeReviews from "./components/HomeReviews";
import HomeText from "./components/HomeText";

function Home(props) {

  return (
    
    <main className="home">
      <Helmet>
        <title>Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Any occasion is only as great as the food that is served! I will cater to your individual needs, providing a delicious menu that looks and tastes like it is made with love by your own personal chef."
        />
        <meta name="keywords" content="dinner, party, wedding, food, Becky's Catering Kitchen, Rexburg, catering"/>

      </Helmet>
      
      <HomeBanner />
      <HomeText />
      <HomeFourSquare />
      <HomeCall />
      <HomeReviews />

    </main>
  );
}

export default Home;