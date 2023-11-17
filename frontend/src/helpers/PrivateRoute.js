import {useContext} from 'react';
import DataContext from "./DataContext";
import {Route, Navigate} from 'react-router-dom';



const PrivateRoute = ({path, children}) => {
  const {currentUser} = useContext(DataContext)
  

  if(!currentUser) {
    return <Navigate to="/signin" />
  }

  return (
    <Route path={path}>
      {children}
    </Route >
  );
}

export default PrivateRoute;