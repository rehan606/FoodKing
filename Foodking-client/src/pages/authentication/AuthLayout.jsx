import React from 'react';
import Navbar from '../common/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>

            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default AuthLayout;