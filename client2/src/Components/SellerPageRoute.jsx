import React from 'react';
import { useSearchParams } from 'react-router-dom';
import SellerPage from './SellerPage';

const SellerPageRoute = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  return <SellerPage userId={userId} />;
};

export default SellerPageRoute;
