import React, {useContext, useState} from 'react';
import './Profile.css';
import DataContext from "../helpers/DataContext";
import { Link } from "react-router-dom";
import JoblyApi from "../api/api";


function Profile() {
  const {currentUser, setCurrentUser} = useContext(DataContext);

  
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    username: currentUser.username,
    password: "",
    email: currentUser.email,
  });

  // const [saveConfirmed, setSaveConfirmed] = useState(false)

  
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  }

  
  
  async function handleSubmit(e) {
    e.preventDefault();

    let userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    }

    let username = currentUser.username;
    let updatedUser;

    try{
      updatedUser = await JoblyApi.updateProfile(username, userData);
      console.log(updatedUser)
    }catch(err) {
      console.error(err);
      return;
    }

    setFormData(d => ({...d, password: ""}));
    // setSaveConfirmed(true)

    setCurrentUser(updatedUser)
  }

  return(
    <main className='main-container'>
      <div className='content-holder'>
        <h2>Edit profile for {currentUser.username}</h2>
        <div className='container-profile-form'>
        <form onSubmit={handleSubmit} className='edit-profile-form'>
          <div>
            <label htmlFor="username">First name: </label>
            <input type="text" name="firstName" id="firstname" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="lastname">Last name: </label>
            <input type="text" name="lastName" id="lastname" value={formData.lastName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} disabled/>
          </div>
        
          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} style={{marginLeft: 52}} />
          </div>
          <div className='btn-box'>
            <input type="submit" name="submit" id="submit" />
            <Link to="/">Cancel</Link>
          </div>
        </form>
        </div>
      </div>
    </main>
  )
}

export default Profile;