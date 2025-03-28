import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location,'Loading');

if(loading){
    return <h1><span className='my-10 bg-blend-darken text-red-500 font-black'>Md.Ariful islam</span>Loading...</h1>;
}

    if(user && user?.email){
        return children;
    };    

    return (
        <Navigate  state={location.pathname} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;