import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [submitLoading, setsubmitLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };
  
    const handleInput = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

   const handleSubmit = async (event) => {
     event.preventDefault();
    setsubmitLoading(true);
    setError('');
     if (!validateForm()) {
      console.log("checking...if");
      setsubmitLoading(false);
      console.log("checking...if statement");
      return;
    } else
     {
       console.log("checking...else");
      try {
        //call apiBackend
        //http://127.0.0.1:8000/api/login
        console.log("checking...try...");
        const response = await axios.post('http://localhost:8000/api/login', formData,);

        console.log("respo",response);
        const token = response.data.token;
        setsubmitLoading(false);
        localStorage.setItem('login_token', token);
        const role = response.data.user.usertype;
        console.log(response.data);
        console.log("get role!", role);
        if (role === 'buyer') {
          navigate('/');
        }
        else
        { 
          navigate('/addproperty');
        }
   
        
        
      } catch (error) {
        console.log("checking...catch");
        console.log("error=>",error);
        setsubmitLoading(false);
        //setError(error.response.data.message);
        
      }
    }
  };

  const validateForm = () => {
    console.log("checking...validateFOrm");
    if (formData.email === undefined || formData.email === '') {
      console.log('Email is required');
      setError('Email is mandatory!');
      return false;
    }
    if (formData.password === undefined || formData.password === '') {
      console.log('Password is required');
      setError('Password is mandatory!');
      return false;
    }

    return true;
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
            required
          />
        </div>
        <div className='div-btn-register'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
