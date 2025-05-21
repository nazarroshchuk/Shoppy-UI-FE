'use server'

import { get } from '@/api/fetch';
import { ProductInterface } from '@/interfaces/product.interface';

export default async function getProduct(productId: string) {
  return get<ProductInterface>(`products/${productId}`)
}