'use client';

import { useActionState } from 'react';

import { Box, Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';
import loginUser from '@/api/login-user';
import { FormResponse } from '../../../interfaces/form-response.interface';

const loginUserWrapper = async (
  prevState: FormResponse,
  formData: FormData,
): Promise<FormResponse> => {
  return await loginUser(prevState, formData);
};

export default function Login() {
  const [state, formAction] = useActionState(loginUserWrapper, { error: '' });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          type="email"
          label="Email"
          placeholder="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          type="password"
          label="Password"
          placeholder="Password"
          variant="outlined"
          name="password"
          helperText={state?.error.includes('Password') ? state.error : ''}
          error={state?.error.includes('Password')}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Link component={NextLink} href="/auth/signup" className="self-center">
          Signup
        </Link>
      </Stack>
      <Box className="text-center" sx={{ color: 'orange' }}>
        {!state?.error.includes('Password') && <p>{state?.error}</p>}
      </Box>
    </form>
  );
}
