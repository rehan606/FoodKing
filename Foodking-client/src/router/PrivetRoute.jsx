import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../pages/common/LoadingSpinner';
import DataLoader from '../pages/common/DataLoader';

const PrivetRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <LoadingSpinner> </LoadingSpinner>
    }

    if(user && user?.email){
        return children
    }


    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivetRoute;