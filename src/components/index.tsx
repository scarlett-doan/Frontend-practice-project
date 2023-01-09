import React from "react";
import {Nav, NavLink, NavMenu}
    from "./navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home">
                        About
                    </NavLink>
                    <NavLink to="/Profile">
                        Profile
                    </NavLink>
                    <NavLink to="/product">
                        Product
                    </NavLink>
                    <NavLink to="/cart">
                        Cart
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;