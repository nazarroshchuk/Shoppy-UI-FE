'use server'

import { get } from '@/api/fetch';
import { Product } from '@/interfaces/product';

export default async function getProduct(productId: string) {
  return get<Product>(`products/${productId}`)
}