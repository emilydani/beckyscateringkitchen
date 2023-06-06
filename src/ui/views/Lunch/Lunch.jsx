import React from 'react';
import { Helmet } from "react-helmet";
import Services from '../Repeat/Services';

import LunchBanner from './components/LunchBanner';
import LunchCall from './components/LunchCall';
import LunchDesserts from './components/LunchDessert';
import LunchPatter from './components/LunchPlatters';
import Salad from '../Repeat/Salad';
import LunchSand from './components/LunchSand';
import LunchSide from './components/LunchSide';
import Soup from '../Repeat/Soup';
import LunchText from './components/LunchText';

export default function Lunch() {
  return (
      <div>
        <Helmet>
        <title>Lunch Menu | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Let me take the stress out of your lunch party and create a tasty lunch menu—catered directly to your wants and needs. Along with offering lunch items like sandwiches, soups and salads, and fruit and veggie platers."
        />
        <meta name="keywords" content="lunch, lunch-in, party, wedding, food, Becky's Catering Kitchen, Rexburg, catering"/>

      </Helmet>

        <LunchBanner />   
        <LunchText />
        <Soup />
        <Salad />
        <LunchSand />
        <LunchPatter />
        <LunchSide />
        <LunchCall />
        <LunchDesserts />
        <Services />
      </div>               
  );
}