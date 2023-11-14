import React from 'react';
import './JobCard.css';


const JobCard = ({title, name, handle, salary}) => {
  

  
  return (
    <div className='job-card'>
      <h3>Title: {title}</h3>
      <h4>Company: {name}</h4>
      <h5>Annual income: ${salary}</h5>
    </div>
 )
}

export default JobCard;