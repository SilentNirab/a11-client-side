import PropTypes from 'prop-types';
import { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(authContext);
    const location = useLocation();

    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress w-full mx-20"></progress>
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivetRoute.propTypes = {
    children:PropTypes.node
};

export default PrivetRoute;