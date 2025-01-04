import React from 'react';
import Navbar from '../common/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;