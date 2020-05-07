import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "pages/search-page";
import MoviePage from "pages/movie-page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route path="/movie/:id" component={MoviePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
