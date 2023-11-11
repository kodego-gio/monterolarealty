
import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    password: '',
    role: 'buyer',
    facebook_url: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await axios.post('http://127.0.0.1:8000/api/registration',
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    if (res.data.status === 200)
    { 
      console.log(res.data.message);
      this.useState({
        firstName: '',
        lastName: '',
        contact: '',
        email: '',
        password: '',
        role: 'buyer',
        facebook_url: '',
      });
    }
  
   
  };

  return (
    <div className="registration-form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
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
