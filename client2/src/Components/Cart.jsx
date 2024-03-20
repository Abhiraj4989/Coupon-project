import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.heading}>Cart</h2>
      <div style={styles.itemList}>
        {cart.map((item, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.itemDetails}>
              <h3>{item.title}</h3>
              <p><strong>Company:</strong> {item.parentCompany}</p>
              <p><strong>Code:</strong> {item.code}</p>
              <p><strong>Selling Price:</strong> ${item.sellingPrice}</p>
            </div>
            <button style={styles.removeButton} onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
      </div>
      {cart.length === 0 && <p style={styles.emptyCartMessage}>Your cart is empty</p>}
    </div>
  );
};

const styles = {
  cartContainer: {
    position: 'fixed',
    top: '50px',
    right: '20px',
    backgroundColor: '#fff',
    padding: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    width: '400px',
    zIndex: '9999',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  itemList: {
    maxHeight: 'calc(100vh - 140px)', // Adjusted height to leave space for the header and empty cart message
    overflowY: 'auto', // Enable vertical scrolling
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid #ddd',
  },
  itemDetails: {
    flex: '1',
  },
  removeButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  emptyCartMessage: {
    textAlign: 'center',
    color: '#888',
  },
};

export default Cart;
