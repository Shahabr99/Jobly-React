import React, {useState, useEffect} from 'react';
import JoblyApi from "../api/api";
import {useParams} from "react-router-dom";
import "./Company.css";


function Company() {
  const {handle} = useParams()
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    async function getData() {
      try{
        const data = await JoblyApi.getCompany(handle);
        
        setCompanyData(data)
      } catch(err) {
        console.error(err)
      }
    }
    getData();
  }, [handle])


  return (
      <main className='container-company-jobs'>
      { companyData && (
        <>
          <h2>{companyData.name.toUpperCase()}</h2>
          <p>{companyData.description}</p>
          {companyData.jobs.map(j => (
            <div className='company-job-card' key={j.id}>
              <h4>{j.title}</h4>
            {j.salary && <p>Annual income: {j.salary}</p>}
            </div>
          ))}
        </>
      )}
    </main>
  )
}

export default Company;