import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/homeLayout/Banner';
import Navbar from '../pages/common/Navbar';
import Footer from '../pages/common/Footer';
import AboutFood from '../pages/homeLayout/AboutFood';
import Services from '../pages/homeLayout/Services';
import TopFoods from '../pages/foodPages/TopFoods';
import Reservation from '../pages/homeLayout/Reservation';

const MainLayout = () => {
    return (
        <div className="font-Oswald">
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>

            <section>
                <Banner></Banner>
            </section>
           
            <main>
                <Outlet></Outlet>
            </main>
            <section>
                <TopFoods></TopFoods>
            </section>
            
            <section>
                <AboutFood></AboutFood>
            </section>

            <section>
                <Services></Services>
            </section>

            <section>
                <Reservation></Reservation>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;