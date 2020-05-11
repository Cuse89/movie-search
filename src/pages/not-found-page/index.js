import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => (
  <Fragment>
    Oops this page doesn't exist. Click <NavLink to={"./"}> here </NavLink> to
    go to the homepage.
  </Fragment>
);

export default NotFoundPage;
