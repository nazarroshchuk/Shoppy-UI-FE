'use client';

import { Button } from '@mui/material';
import checkout from '@/api/checkout';
import getStripe from '@/app/checkout/stripe';

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {

  const handleCheckout = async () => {
    const session = await checkout(productId);
    console.log({ session });
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId: session.data.id });
  };


  return (
    <Button variant="contained" className="max-w-[25%]" onClick={handleCheckout}>Buy now</Button>
  );
};