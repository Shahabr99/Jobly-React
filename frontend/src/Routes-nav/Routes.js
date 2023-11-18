import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import CompaniesList from '../companies/CompaniesList';
import Company from '../companies/Company';
import JobsList from '../jobs/JobsList';
import LoginForm from '../forms/LoginForm';
import SignupForm from "../forms/SignupForm";
import Profile from '../user/Profile';
import PrivateRoute from "../helpers/PrivateRoute"

const RouteList = ({signin, signup}) => {


  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />}/>

          <Route element={<PrivateRoute />}>
            <Route path="/companies" element={<CompaniesList />} />
            <Route path="/companies/:handle" element={<Company />} />
            <Route path="/jobs" element={<JobsList />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/signin" element={<LoginForm signin={signin} />} />
          
        </Routes>
    </div>
  )
}

export default RouteList;