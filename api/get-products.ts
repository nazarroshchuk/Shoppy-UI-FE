"use server"

import { get } from '@/api/fetch';
import { Product } from '@/interfaces/product';
import { PRODUCTS_TAG } from '@/constants/tags';

export default async function getProducts() {
  return get<Product[]>('products', [PRODUCTS_TAG]);
}