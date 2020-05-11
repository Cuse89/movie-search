import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SearchPage from "pages/search-page";
import MoviePage from "pages/movie-page";
import Header from "components/header";
import NotFoundPage from "pages/not-found-page";

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search" component={SearchPage} />
        <Route path="/movie/:id" component={MoviePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
