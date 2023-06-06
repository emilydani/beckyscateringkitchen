import React from 'react';
import { Helmet } from "react-helmet";

import CakeBanner from './components/CakeBanner';
import CakeBites from './components/CakeBites';
import CakeCakes from './components/CakeCakes';
import CakeText from './components/CakeText';

export default function Cheesecake() {
  return (
      <div>
        <Helmet>
        <title>Cheesecakes | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Delicious, creamy cheesecakes that are baked slowly, to create a smooth, rich texture that will leave you wanting more."
        />
       <meta name="keywords" content="cake, cheesecake, Becky's Catering Kitchen, Rexburg, Catering"/>
      </Helmet>

        <CakeBanner />
        <CakeText />
        <CakeCakes />
        <CakeBites />
      </div>               
  );
}