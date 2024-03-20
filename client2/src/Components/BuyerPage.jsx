import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coupon from './Coupon'; // Import Coupon component
import Cart from './Cart'; // Import Cart component
import PayFooter from './PayFooter'; // Import PayFooter component
import SearchBar from './searchBar'; // Import SearchBar component

const BuyerPage = () => {
  const [coupons, setCoupons] = useState([]); // State to store fetched coupons
  const [cart, setCart] = useState([]); // State to store items in the cart
  const [showCart, setShowCart] = useState(false); // State to control the visibility of the cart
  const [originalCoupons, setOriginal] = useState([]);
  useEffect(() => {
    // Fetch coupons from the backend when the component mounts
    const fetchCoupons = async () => {
      try {
        const response = await axios.get('http://localhost:5000/coupons');
         setOriginal(response.data);
         setCoupons(response.data); // Update the state with fetched coupons
        
      } catch (error) {
        console.error('Error fetching coupons:', error);
      }
    };
    
    fetchCoupons(); // Call the fetchCoupons function
  }, []); // Empty dependency array to ensure the effect runs only once

  const addToCart = (coupon) => {
   
    // Check if the coupon is already in the cart
    const isCouponInCart = cart.some((item) => item._id === coupon._id);
    
    // If the coupon is not already in the cart, add it
    if (!isCouponInCart) {
      setCart([...cart, coupon]);
    }
  };

  // Function to remove a coupon from the cart
  const removeFromCart = (couponToRemove) => {
    setCart(cart.filter((coupon) => coupon !== couponToRemove));
  };

  // Toggle the visibility of the cart
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <h1>Welcome to Coupon App</h1>
      <SearchBar originalCoupons = {originalCoupons} onUpdate = {(state) => setCoupons(state)}/> 
      <div>
        {/* Map over the fetched coupons and render each one using the Coupon component */}
        {coupons.map((coupon) => (
          <div key={coupon._id} onClick={() => addToCart(coupon)}>
            <Coupon coupon={coupon} />
          </div>
        ))}
      </div>
      {/* Cart icon to toggle visibility of the cart */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', cursor: 'pointer' }} onClick={toggleCart}>
        {cart.length > 0 ? <img src="full-cart-icon.png" alt="Full Cart" /> : <img src="empty-cart-svgrepo-com.svg" alt="Empty Cart" />}
      </div>
      {/* Render the Cart component if showCart is true */}
      {showCart && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <PayFooter />
    </div>
  );
};

export default BuyerPage;
