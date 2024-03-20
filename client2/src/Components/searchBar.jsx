import React, { useState, useEffect } from 'react';
import Coupon from './Coupon';
import './SearchBar.css'; // Import the CSS file for styling

const SearchBar = ({ originalCoupons, onUpdate }) => {
  const [searchInput, setSearchInput] = useState('');


  const handleInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchInput === '') {
      // Reset to the original list of coupons if searchInput is empty
      onUpdate(originalCoupons);
    } else {
      // Filter coupons based on the search input
      const filteredArray = originalCoupons.filter(coupon =>
        coupon.parentCompany.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(filteredArray)
      onUpdate(filteredArray);
    }
  }, [searchInput]);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by company name..."
        value={searchInput}
        onChange={handleInputChange}
      />
      {/* <div className="container">
        {filteredCoupons.map((coupon, index) => (
          <Coupon key={index} coupon={coupon} />
        ))}
      </div> */}
    </div>
  );
};

export default SearchBar;
