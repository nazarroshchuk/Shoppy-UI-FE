'use server';

import { API_URL } from '@/constants/api';
import { getErrorMessage } from '@/util/errors';
import { cookies } from 'next/headers';

export const getHeaders = async () => {
  const cookiesServer = await cookies();

  return {
    Cookie: cookiesServer.toString(),
  };
};

export const post = async (path: string, data: FormData | object) => {
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  let response;
  try {
    const headers = await getHeaders();
    const res = await fetch(`${API_URL}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
    });

    response = await res.json();

    if (!res.ok) {
      console.log(response);
      return { error: getErrorMessage(response) };
    }
  } catch (error) {
    console.log(error);
    return { error: getErrorMessage(error) };
  }

  return { error: '', data: response };
};

export const get = async <T>(
  path: string,
  tags?: string[],
  params?: URLSearchParams,
) => {
  try {
    const url = params ? `${API_URL}/${path}?${params}` : `${API_URL}/${path}`;
    const headers = await getHeaders();
    const res = await fetch(url, {
      headers: { ...headers },
      next: { tags },
    });

    return res.json() as T;
  } catch (e) {
    console.log(e);
  }
};
