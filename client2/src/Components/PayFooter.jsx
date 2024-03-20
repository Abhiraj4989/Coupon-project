import React from 'react';

const PayFooter = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'yellow', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ margin: 0 }}>Proceed to Pay</p>
    </div>
  );
};

export default PayFooter;
