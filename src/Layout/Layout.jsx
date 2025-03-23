import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <div className='bg-[#0073E6]'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
           <div className='bg-[#212121] text-[#F5F5F5]'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Layout;