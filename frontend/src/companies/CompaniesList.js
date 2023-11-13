import React, {useState, useEffect} from 'react';
import JoblyApi from '../api/api';
import CompanyCard from './CompanyCard';


function CompaniesList() {
  const [companies, setCompanies] = useState([])

  useEffect(function getCompanies() {
    getAllCompanies()
  }, [])

  async function getAllCompanies(name) {
    const data = await JoblyApi.getCompanies(name);
    console.log(data)
    setCompanies(data)
  }
  
  return (
    <div className='container'>
      {companies.map(c => (
        <CompanyCard name={c.name} desc={c.description} key={c.handle} />
      ))}
    </div>
  )
}

export default CompaniesList;