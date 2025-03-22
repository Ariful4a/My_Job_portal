import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div className='bg-[#1E1E2E]'>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;