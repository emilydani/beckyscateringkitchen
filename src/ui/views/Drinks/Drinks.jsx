import React from 'react';
import { Helmet } from "react-helmet";

import DrinksBanner from './components/DrinksBanner';
import DrinksBeverages from './components/DrinksBeverages';

export default function Drinks() {
  return (
      <div>
        <Helmet>
        <title>Beverages | Becky's Catering Kitchen</title>
        <meta
          name="description"
          content="Becky's Catering Kitchen offers tasty drinks that will quench any guest's thirst."
        />
        <meta name="keywords" content="drinks, beverages, Becky's Catering Kitchen, Rexburg, catering"/>
      </Helmet>
        
        <DrinksBanner />
        <DrinksBeverages />

      </div>               
  );
}