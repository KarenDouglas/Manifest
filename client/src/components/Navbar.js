
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
      <header className=" bg-dark-gradient">
        <div className="container ">
            <ul>
                <li>
                    <NavLink
                    to ="/"
                    >
                    <h1  className=" text-accent-green font-cursive-bold">Home</h1>   
                    </NavLink>
                </li>
            </ul>
        </div>
      </header>
    )
}

export default Navbar;