import React, {useState, useEffect} from 'react';
import JoblyApi from '../api/api';
import CompanyCard from './CompanyCard';
import "./CompaniesList.css"

function CompaniesList() {
  const [companies, setCompanies] = useState([])

  useEffect(function getCompanies() {
    getAllCompanies()
  }, [])

  async function getAllCompanies() {
    const data = await JoblyApi.getCompanies();
    console.log(data)
    setCompanies(data)
  }
  
  return (
    <main className='companies-list'>
      {companies.map(c => (
        <CompanyCard key={c.handle} name={c.name} desc={c.description} handle={c.handle} />
      ))}
    </main>
  )
}

export default CompaniesList;