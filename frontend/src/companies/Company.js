import React, {useState, useEffect} from 'react';
import JoblyApi from "../api/api";
import JobCard from '../jobs/JobCard';

function Company() {
  const [jobs, setJobs] = useState([])

  useEffect(function getJobs() {
    getData()
  },[])

  async function getData(handle) {
    const data = await JoblyApi.getCompany(handle);
    console.log(data)
    setJobs(data)
  }


  return(
    <main className='container-company'>
      <h2>Company's job listing goes here</h2>
      {jobs.map(j => (
        <JobCard />
      ))}
    </main>
  )
}

export default Company;