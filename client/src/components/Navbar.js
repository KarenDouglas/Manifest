
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
      <header>
        <div className="container">
            <ul>
                <li>
                    <NavLink
                    to ="/"
                    >
                    <h1>Home</h1>   
                    </NavLink>
                </li>
            </ul>
        </div>
      </header>
    )
}

export default Navbar;