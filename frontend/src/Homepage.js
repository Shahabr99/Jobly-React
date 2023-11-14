import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Homepage.css';
import DataContext from './helpers/DataContext';


function Homepage() {

  const { currentUser } = useContext(DataContext)


  return ( 
    <main>
      { !currentUser &&
        <div className="container">
          <h1>Welcome to the largest job database in the market.</h1>
          <p>You are one click away from your dream job.</p>
          { currentUser ? 
            <h2>Welcome { currentUser.username }</h2> :
            <div className="anchor-box">
              <Link to="/signin">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          } 
        </div>
      }
       { currentUser &&
        <div className="container">
          <h1>Welcome to the largest job database in the market.</h1>
          <p>You are one click away from your dream job.</p>
          { currentUser ? 
            <h2>Welcome { currentUser.username }</h2> :
            <p>Welcome {currentUser.username}, go ahead and apply some jobs</p>
          } 
        </div>
      }
    </main>
  )
}

export default Homepage;