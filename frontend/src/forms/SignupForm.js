import React, {useState} from 'react';
import './SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';


function SignupForm({signup}) {
  
  const navigate = useNavigate();

  const [ formData, setFormData ] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  })


  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name] : value
    })) 
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let result = await signup(formData);
    if(result.success) {
      navigate("/")
    }else{
      console.error("Signup failed!")
    }
  }

  return(
      <div className="form-box">
        <h2>Create account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname">First name: </label>
            <input type="text" name="firstName" id="firstname" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="lastname">Last name: </label>
            <input type="text" name="lastName" id="lastname" value={formData.lastName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="email">
            <label>E-mail: </label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="buttons">
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <Link to="/">homepage</Link>
          </div>
        </form>
      </div>
  )
}

export default SignupForm;