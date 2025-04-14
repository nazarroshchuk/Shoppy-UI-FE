'use client';

import {Box, Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";
import createUser from "@/app/auth/signup/create-user";
import {useActionState} from "react";

export default function Page() {
    const [state, formAction] = useActionState(createUser, {error: ''})
    return (
        <form action={formAction}>
            <Stack spacing={2} className='w-full max-w-xs'>
                <TextField
                    name='email'
                    type='email'
                    label='Email'
                    placeholder='Email'
                    variant='outlined'
                    helperText={state.error.includes('Email') ? state.error : ""}
                    error={state.error.includes('Email')}
                />
                <TextField
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Password'
                    variant='outlined'
                    helperText={state.error.includes('Password') ? state.error : ""}
                    error={state.error.includes('Password')}
                />
                <Button type='submit' variant='contained' color='primary'>Signup</Button>
                <Link component={NextLink} href='/auth/login' className='self-center'>
                    Login
                </Link>
                <Box className='text-center'>
                    {!state.error.includes('Email') && !state.error.includes('Password') && <p>{state.error}</p>}
                </Box>
            </Stack>
        </form>
    )
}