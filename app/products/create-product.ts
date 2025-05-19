'use server';

import { post } from '@/api/fetch';
import { revalidateTag } from 'next/cache';
import { PRODUCTS_TAG } from '@/constants/tags';

export default async function createProduct(formData: FormData) {
  const response = post('products', formData);
  revalidateTag(PRODUCTS_TAG);

  return response;
}