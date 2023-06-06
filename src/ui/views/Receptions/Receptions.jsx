import React from 'react';
import { Helmet } from "react-helmet";

import RecepBanner from './components/RecepBanner';
import RecepBrownies from './components/RecepBrownies';
import RecepCake from './components/RecepCake';
import RecepCookie from './components/RecepCookie';
import RecepDessert from './components/RecepDessert';
import RecepFruit from './components/RecepFruit';
import RecepSavory from './components/RecepSavory';
import RecepText from './components/RecepText';
import Services from '../Repeat/Services';

export default function Receptions() {
  return (
      <div>
        <Helmet>
        <title>Reception Food | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="From savory food, to fruits and veggies, to decadent desserts, Becky's Catering Kitchen offers it all. These delicious reception food that will leave you wanting more."
        />
        <meta name="keywords" content="reception, party, wedding, Becky's Catering Kitchen, Rexburg, catering, platter, dessert"/>
      </Helmet>

        <RecepBanner />
        <RecepText />
        <RecepSavory />
        <RecepFruit />
        <RecepCookie />
        <RecepCake />
        <RecepBrownies />
        <RecepDessert />
        <Services />

      </div>               
  );
}