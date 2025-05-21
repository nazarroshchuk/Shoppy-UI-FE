'use server';

import { cookies } from 'next/headers';
import { AUTHENTICATION_COOKIE } from '@/constants/auth-cookie';

export default async function authenticated() {
  const serverCookies = await cookies();

  return !!serverCookies.get(AUTHENTICATION_COOKIE)?.value;
}
