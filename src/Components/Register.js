
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    password: '',
    role: 'buyer',
    facebook_url: '',
  });
    
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      setSuccess('Registration successful');

      if (formData.role === 'buyer') {
        navigate('/');
      }
      else
      { 
        navigate('/addproperty');
      }

    } catch (error) {
       if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
      // Handle the error, show a message, etc.
    }
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="usertype">Are you a Buyer or Seller?</label>
          <select
            name="role"
            id="usertype"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="buyer">Buyer</option>
            <option value="vendor">Vendor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="facebook_url">Facebook URL</label>
          <input
            type="url"
            name="facebook_url"
            id="fb_link"
            value={formData.fb_link}
            onChange={handleChange}
          />
        </div>

        <button className='btn-register' type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register
