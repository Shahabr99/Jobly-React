import React, { useState, useEffect } from 'react';
import JoblyApi from './api/api';
import RouteList from './Routes-nav/Routes'
import Navbar from './Routes-nav/Navbar'
import './App.css';
import useLocalStorage from './hooks/useLocalStorage';
import LoadingSpinner from './helpers/LoadingSpinner';
import DataContext from './helpers/DataContext';
import { BrowserRouter } from 'react-router-dom';
import {jwtDecode } from 'jwt-decode';
export const TOKEN_STORAGE_ID = "jobly-token";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [applications, setApplications] = useState(new Set([]));


  useEffect(function getUserData() {
    async function getUser() {
      if(token) {
       
        try{
          let { username } = jwtDecode(token);
          
          JoblyApi.token = token
          const user = await JoblyApi.getCurrentUser(username);
          
          setCurrentUser(user);

        }catch(err){
          console.log(`Problem Loading: ${err}`);
          setCurrentUser(null);
        }
      }
      setDataLoaded(true)
    }
    // setDataLoaded(false)
    getUser()
  },[token]) 


  // Function for adding a new user to the database.
  async function addNewUser(userData) {
    try{
      let newToken = await JoblyApi.signup(userData);
      console.log(token)
      setToken(newToken)
      return { success: true }
    }catch(err){
      console.log(err)
      return {success: false}
    }
  }

  // Function for authentication of the user and logging user in.
  async function login(user) {
    try {
      let newToken = await JoblyApi.login(user);
      setToken(newToken)
      return {success: true}
    }catch(err) {
      console.error(err)
      return {success:false}
    }
  }

  // Function that clears the currentUser state
  //  and Token state when user loggs out.
  function logout() {
    setCurrentUser(null);
    setToken(null)
  }

  // Checks to see is a job is applied before.
  function hasAppliedBefore(jobId) {
    return applications.has(jobId)
  }

  //Adds a job to the set of jobs that the
  // user has applied so far.
  async function applyJob(username, jobId) {
    if(hasAppliedBefore) return;
    await JoblyApi.applyToJob(username, jobId);
    setApplications(new Set([...applications, jobId]))
  }
 
  

  if(!dataLoaded) return (
    <div className='spinner'>
      <h>Loading...</h>
      <LoadingSpinner />
    </div>
  )

  return (
    <div className="App">
      <BrowserRouter>
        <DataContext.Provider value={{currentUser, setCurrentUser, applyJob, hasAppliedBefore}}>
          <Navbar logout={logout} />
          <RouteList signin={login} signup={addNewUser} />
        </DataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
