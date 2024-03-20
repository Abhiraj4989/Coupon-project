import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const SellerPage = ({ userId }) => {
  console.log(userId) ;
  const [formData, setFormData] = useState({
    parentCompany: '',
    code: '',
    title: '',
    sellingPrice: '', // Add selling price field
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log("aagya") ;
    try {
      console.log(userId) ;
    
      console.log(formData) ;
      const response = await axios.post('http://localhost:5000/coupons', formData);
      console.log('Response:', response.data); // Log the response data
      // Redirect to the success page after successful form submission
      navigate('/success'); // Navigate to '/success' route
      setFormData({
        parentCompany: '',
        code: '',
        title: '',
        sellingPrice: '', // Reset selling price field
      });
    } catch (error) {
      console.error('Error adding coupon:', error);
    }
  };
  

  return (
    <div className="seller-page">
      <style>{`
        .seller-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .form {
          width: 400px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Apply box shadow */
        }
        
        .form h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          font-weight: bold;
        }
        
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        
        .btn-submit {
          width: 100%;
          padding: 10px;
          background-color: #4CAF50; /* Green color */
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .btn-submit:hover {
          background-color: #45a049; /* Darker green color on hover */
        }
      `}</style>
      <div className="form">
        <h2>Add Coupon</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="parentCompany">Parent Company:</label>
            <input
              type="text"
              id="parentCompany"
              name="parentCompany"
              value={formData.parentCompany}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="code">Coupon Code:</label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sellingPrice">Selling Price:</label>
            <input
              type="text"
              id="sellingPrice"
              name="sellingPrice"
              value={formData.sellingPrice}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SellerPage;
