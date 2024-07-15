import React from 'react';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from '../../Shared/Loader/Loader';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loader></Loader>;
    }
    const location = useLocation();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;