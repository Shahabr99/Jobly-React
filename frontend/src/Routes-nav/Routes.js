import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import CompaniesList from '../companies/CompaniesList';
import JobCard from '../jobs/JobCard';
import JobsList from '../jobs/JobsList';
import LoginForm from '../forms/LoginForm';
import SignupForm from "../forms/SignupForm";
import Profile from '../user/Profile';

const RouteList = ({signin, signup}) => {


  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/companies" element={<CompaniesList />} />
          <Route path="/companies/:handle" element={<JobCard />} />
          <Route path="/jobs" element={<JobsList />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/signin" element={<LoginForm signin={signin} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  )
}

export default RouteList;