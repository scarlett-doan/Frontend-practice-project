import React from 'react';
import { Outlet } from 'react-router';
import {Nav, NavLink, NavMenu} from "./navbar";

const WithoutNav = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
            <Outlet />
        </>
    );
};
export default WithoutNav;
