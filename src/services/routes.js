import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../ui/views/Home/Home';
import Lunch from '../ui/views/Lunch/Lunch';
import Dinner from '../ui/views/Dinner/Dinner';
import Receptions from '../ui/views/Receptions/Receptions';
import Drinks from '../ui/views/Drinks/Drinks';
import Cheesecake from '../ui/views/Cheesecake/Cheesecake';
import Contact from '../ui/views/Contact/Contact';

function Routes() {

  // function refreshPage() {
  //   window.location.reload(true);
  //   console.log("refresh complete")
  //   window.location.reload(false);
  //   console.log("refreshing was complete")
  // }
  
  return (
          <Switch>
        
            <Route exact={true} path="/" component={Home} />
            <Route path="/lunch-menu" component={Lunch} />
            <Route path="/dinner-menu" component={Dinner} />
            <Route path="/reception-food" component={Receptions} />
            <Route path="/drinks" component={Drinks} />
            <Route path="/cheesecake" component={Cheesecake} />
            <Route path="/contact" component={Contact} />
            
          </Switch>          
  );
}

export default Routes;