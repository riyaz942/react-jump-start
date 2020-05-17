import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

const HomePage = () => (<div>Home Page</div>)

const Routes = () => {
  return (
    <Suspense fallback={<div>A Splashscreen loading</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  )
}

export default Routes;
