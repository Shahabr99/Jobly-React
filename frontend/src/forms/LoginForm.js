import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';



function LoginForm({signin}) {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  
  function handleChange(e) {
    const {name, value} = e.target
    setFormData(data => ({
      ...data,
      [name] : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    signin(formData);
    navigate("/companies")
  }


  return (
    <div className="form-box">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleSubmit}>Submit</button>
          <Link to="/">homepage</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;