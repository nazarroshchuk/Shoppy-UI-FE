'use server'

import { revalidateTag } from 'next/cache';
import { PRODUCTS_TAG } from '@/constants/tags';

export default async function revalidateProducts() {
  revalidateTag(PRODUCTS_TAG)
}
