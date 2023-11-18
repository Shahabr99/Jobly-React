import React, {useContext} from 'react';
import DataContext from "./DataContext";
import {Outlet, Navigate} from 'react-router-dom';



const PrivateRoute = ({path, element}) => {
  const {currentUser} = useContext(DataContext)
  

  if(!currentUser) {
    return <Navigate to="/signin" />
  }

  return (
    <Outlet />
  )
};

export default PrivateRoute;