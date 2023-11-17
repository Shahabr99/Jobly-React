import React, {useContext, useState} from 'react';
import './Profile.css';
import DataContext from "../helpers/DataContext";
import { Link } from "react-router-dom";
import JoblyApi from "../api/api";


function Profile() {
  const {currentUser, setCurrentUser} = useContext(DataContext);

  const [newData, setNewData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    username: currentUser.username,
    password: "",
    email: currentUser.email,
  });

  // const [saveConfirmed, setSaveConfirmed] = useState(false)

  
  function handleChange(e) {
    const {name, value} = e.target;
    setNewData(data => ({
      ...data,
      [name]: value,
    }));
  }

  
  
  async function handleSubmit(e) {
    e.preventDefault();

    let userData = {
      firstName: newData.firstName,
      lastName: newData.lastName,
      email: newData.email,
      password: newData.password,
    }

    let username = newData.username;
    let updatedUser;

    try{
      updatedUser = await JoblyApi.updateProfile(username, userData);
      console.log(updatedUser)
    }catch(err) {
      console.error(err)
    }

    setNewData(f => ({...f, password: ""}));
    // setSaveConfirmed(true)

    setCurrentUser(updatedUser)
  }

  return(
    <main className='container-profile-form'>
      <form onSubmit={handleSubmit} className='edit-profile-form'>
        <div>
          <label htmlFor="username">First name: </label>
          <input type="text" name="firstName" id="firstname" value={newData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="lastname">Last name: </label>
          <input type="text" name="lastName" id="lastname" value={newData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={newData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password" >Password: </label>
          <input type="password" name="password" id="password" value={newData.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={newData.email} onChange={handleChange} style={{marginLeft: 52}} />
        </div>
        <div className='btn-box'>
          <input type="submit" name="submit" id="submit" />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </main>
  )
}

export default Profile;