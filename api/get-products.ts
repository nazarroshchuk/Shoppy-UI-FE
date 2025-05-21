"use server"

import { get } from '@/api/fetch';
import { ProductInterface } from '@/interfaces/product.interface';
import { PRODUCTS_TAG } from '@/constants/tags';

export default async function getProducts() {
  return get<ProductInterface[]>('products', [PRODUCTS_TAG], new URLSearchParams({ status: 'available'}));
}