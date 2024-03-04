import React from "react";
import { Switch, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Timer from "./tools/Timer";

import Incoming from "./pages/Incoming";
import NotFound from "./pages/NotFound";

const Main = () => {
  return (
    <>
      <Loading />
      <Timer />
      <Switch>
        {/* <div id='blocker-container'>
          <div id='blocker-notice'>
            <p>Don't you dare</p>
            <Button>OK</Button>
          </div>
        </div>
        <div id='context-menu-blocker-container'>
          <div id='context-menu-blocker-notice'>
            <p>Right click is not allowed</p>
            <Button>OK</Button>
          </div>
        </div> */}
        <Route path="/" component={Incoming} />
        {/* <Route path='/' component={Home} /> */}
        {/* <Route path='/works' component={Works} />
				<Route path='/contact' component={Contact} />
				<Route path='/stats' component={Stats} /> */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Main;
