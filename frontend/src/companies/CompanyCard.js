import React from 'react';
import './CompanyCard.css';
import {Link} from 'react-router-dom';




const CompanyCard = ({handle, name, desc}) => {
  

  return (
      <Link to={`/companies/${handle}`} className='card'>
        <div>
          <h4>{name}</h4>
          <p>{desc}</p>
        </div>
      </Link>
  )
}

export default CompanyCard;