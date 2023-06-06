import React from 'react';
import { Helmet } from "react-helmet";

import DinnerBanner from "./components/DinnerBanner";
import DinnerBuffet from './components/DinnerBuffet';
import DinnerMain from './components/DinnerMain';
import DinnerPotato from './components/DinnerPotato';
import DinnerSide from './components/DinnerSide';
import DinnerText from "./components/DinnerText";
import Soup from '../Repeat/Soup';
import Salad from '../Repeat/Salad';
import DinnerDessert from './components/DinnerDessert';
import Services from '../Repeat/Services';

export default function Dinner() {
  return (
      <div>
        <Helmet>
        <title>Dinner Menu | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Becky's Catering Kitchen offers delicious buffets, main meals, side dishes, soups, and desserts. I will cater to your individual needs, providing a delicious menu that looks and tastes like it is made with love by your own personal chef."
        />
        <meta name="keywords" content="dinner, party, wedding, Becky's Catering Kitchen, Rexburg, catering, soup, dessert"/>
        </Helmet>

        <DinnerBanner />
        <DinnerText />
        <DinnerBuffet />
        <DinnerMain />
        <DinnerSide />
        <DinnerPotato />
        <Soup />
        <Salad />
        <DinnerDessert />
        <Services />

      </div>               
  );
}