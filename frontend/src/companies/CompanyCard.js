import React from 'react';
import './CompanyCard.css';
import {Link} from 'react-router-dom';


const CompanyCard = ({name, desc }) => {


  return (
      <Link to={`/companies/${name}`} >
        <div className='card'>
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
      </Link>
    
  )
}

export default CompanyCard;