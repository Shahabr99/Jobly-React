import React, {useState, useEffect} from 'react';
import JoblyApi from "../api/api";
import JobCard from "./JobCard";
import "./JobsList.css";

function JobsList() {
  const [jobs, setJobs] = useState([]) 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await JoblyApi.getJobs();
       
        setJobs(data)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  

  return(
    <main className='container-jobs'>
      {jobs.map(j => (
        <JobCard handle={j.companyHandle} name={j.companyName} key={j.id} salary={j.salary} title={j.title} />
      ))}
    </main>
  )
}

export default JobsList;

