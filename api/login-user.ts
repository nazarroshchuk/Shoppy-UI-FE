'use server';

import { FormResponse } from '../interfaces/form-response.interface';
import { API_URL } from '@/constants/api';
import { getErrorMessage } from '@/util/errors';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import { AUTHENTICATION_COOKIE } from '@/constants/auth-cookie';

export default async function loginUser(
  _prevState: FormResponse,
  formData: FormData,
) {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const parsedRes = await res.json();

    if (!res.ok) {
      return { error: getErrorMessage(parsedRes) };
    }

    await setAuthCookies(res);
  } catch (e) {
    console.error(e);
  }

  redirect('/');
}

const setAuthCookies = async (response: Response) => {
  const setCookiesHeader = response.headers.get('Set-Cookie');

  if (setCookiesHeader) {
    const token = setCookiesHeader.split(';')[0].split('=')[1];
    const cookiesResponse = await cookies();

    cookiesResponse.set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
