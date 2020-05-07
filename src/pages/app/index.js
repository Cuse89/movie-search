import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "pages/search-page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
