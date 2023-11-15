import {useContext} from 'react';
import DataContext from "./DataContext";
import {Route, Redirect} from 'react-router-dom';



const PrivateRoute = ({path, children}) => {
  const {currentUser} = useContext(DataContext)

  if(!currentUser) {
    return <Redirect to="/login" />
  }

  return (
    <Route path={path} element={children} />
  )
}

export default PrivateRoute;