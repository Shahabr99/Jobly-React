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
      <main>
        {companies.map(c => (
         
            <div >
              <CompanyCard key={c.handle} name={c.name} desc={c.description} handle={c.handle} />
            </div>
         
        ))}
      </main>
  )
}

export default CompaniesList;