import React from 'react';
import NavBar from '.';
import {Outlet} from 'react-router';

const WithNav = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
}
export default WithNav;