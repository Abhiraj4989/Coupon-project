import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri'; // Importing the close icon from React Icons

const CouponValidate = ({ coupon, onValidate }) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={coupon.image} alt="Coupon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={styles.textContainer}>
        <p>{coupon.title}</p>
        <p>Company: {coupon.parentCompany}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={toggleDialog}>{coupon.sellingPrice}</button>
        <button style={styles.button} onClick={() => onValidate(coupon)}>Validate Coupon</button>
      </div>
      {showDialog && (
        <div className="dialog" style={styles.dialog}>
          <p>Coupon Code: {coupon.code}</p>
          <button style={styles.closeButton} onClick={toggleDialog}>
            <RiCloseLine style={styles.closeIcon} />
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    marginBottom: '20px',
  },
  imageContainer: {
    width: '30%',
    marginRight: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  textContainer: {
    flex: '1',
  },
  buttonContainer: {},
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginRight: '10px',
  },
  dialog: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '9999',
    border: '1px solid #ccc',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    color: 'red', // Set the color of the close icon
    fontSize: '20px',
  },
};

export default CouponValidate;
