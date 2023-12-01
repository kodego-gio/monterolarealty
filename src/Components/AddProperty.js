import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProperty = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('YOUR_LARAVEL_API_ENDPOINT', data);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='div-addProperty-form'>
    <form onSubmit={handleSubmit(onSubmit)} className="add-property-form">
      <h3 className='addProperty-header-text'>Add Property</h3>
      <label>
        Property Name:
        <input {...register('propertyName')} />
      </label>
      <label>
        Property Address:
        <input {...register('propertyAddress')} />
      </label>

      <label>
        Property Type:
        <select {...register('propertyType')}>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
          <option value="Project Selling">Project Selling</option>
        </select>
      </label>

      <label>
        Price:
        <input {...register('price')} />
      </label>
      <label>
        Bedrooms:
        <input {...register('bedrooms')} />
      </label>  
      <label>
        Floor Area:
        <input {...register('floorArea')} />
      </label>
      <label>
        Lot Area:
        <input {...register('lotArea')} />
      </label>

      {/* Add other fields such as Price, Bedrooms, Bathrooms, Floor Area, Lot Area, etc. */}

      <label>
        Image Upload:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setValue('image', e.target.files[0]);
          }}
        />
      </label>
       <div className='div-btn-register'>
        <button className='btn-register' type="submit">Submit</button>
      </div>   
      </form>
      </div>
  );
};

export default AddProperty;
