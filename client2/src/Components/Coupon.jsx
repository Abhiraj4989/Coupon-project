import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri'; // Importing the close icon from React Icons

const Coupon = ({ coupon }) => {
  const [showDialog, setShowDialog] = useState(false);

  const toggleDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={"data:image/png;base64,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"} alt="Coupon" style={{ width: '35%', height: '80%' }} />
      </div>
      <div style={styles.textContainer}>
        <p>{coupon.title}</p>
        <p>Company: {coupon.parentCompany}</p>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={toggleDialog}>{coupon.sellingPrice}</button>
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

export default Coupon;
