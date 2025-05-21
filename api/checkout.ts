'use server';

import { post } from '@/api/fetch';

export default async function checkout(productId: number) {
  return post('checkout/session', { productId });
}
