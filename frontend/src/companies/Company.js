import React, {useState, useEffect} from 'react';
import JoblyApi from "../api/api";



function Company() {
  const [companyJobs, setCompanyJobs] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await JoblyApi.getCompanies()
    }
    getData()
  }, [])


  return(
    <main className='container-company'>
      
    </main>
  )
}

export default Company;