'use server';

import { get } from '@/api/fetch';

export default async function getMe() {
  return await get('users/me');
}
