'use server';

import { getHeaders, post } from '@/api/fetch';
import { revalidateTag } from 'next/cache';
import { PRODUCTS_TAG } from '@/constants/tags';
import { API_URL } from '@/constants/api';

export default async function createProduct(formData: FormData) {
  const response = await post('products', formData);

  const productImage = formData.get('image');
  if(productImage instanceof File && !response?.error) {
    await uploadProductImage(response.data.id, productImage);
  }
  revalidateTag(PRODUCTS_TAG);

  return response;
}

async function uploadProductImage(productId: number, file: File): Promise<void> {
  const formData = new FormData();
  formData.append('image', file);
  const headers = await getHeaders();

  await fetch(`${API_URL}/products/${productId}/image`, {
    method: 'POST',
    body: formData,
    headers,
  });
}