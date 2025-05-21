import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Stripe | null = null;
console.log('Stripe Key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const getStripe = async () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  if (!key) {
    throw new Error(
      'Missing NEXT_STRIPE_PUBLISHABLE_KEY in environment variables',
    );
  }

  if (!stripePromise) {
    stripePromise = await loadStripe(key);
  }
  return stripePromise;
};

export default getStripe;
