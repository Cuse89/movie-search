import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss"

const Header = () => (
    <div className={styles.root}>
        <NavLink to="/search">
            <h1 className={styles.title} >Movie Universe</h1>
        </NavLink>
    </div>
);

export default Header;