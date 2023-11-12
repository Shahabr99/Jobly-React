import React, {useContext} from 'react';
import DataContext from '../DataContext';

function CompaniesList() {
  const {currentUser} = useContext(DataContext)
  
  return (
    <main className='container'>
      <h1>List of companies go here {currentUser}</h1>
    </main>
  )
}

export default CompaniesList;