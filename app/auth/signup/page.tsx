'use client';

import {Box, Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";
import createUser from "@/api/create-user";
import {useActionState} from "react";
import {FormResponse} from "../../../interfaces/form-response.interface";

const createUserWrapper = async (
    prevState: FormResponse,
    formData: FormData
): Promise<FormResponse> => {
    return await createUser(prevState, formData);
};

export default function Page() {
    const [state, formAction] = useActionState(createUserWrapper, { error: ''})
console.log(state)
    return (
        <form action={formAction} className='w-full max-w-xs'>
            <Stack spacing={2}>
                <TextField
                    name='email'
                    type='email'
                    label='Email'
                    placeholder='Email'
                    variant='outlined'
                    helperText={state?.error.includes('Email') ? state.error : ""}
                    error={state?.error.includes('Email')}
                />
                <TextField
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Password'
                    variant='outlined'
                    helperText={state?.error.includes('Password') ? state.error : ""}
                    error={state?.error.includes('Password')}
                />
                <Button type='submit' variant='contained' color='primary'>Signup</Button>
                <Link component={NextLink} href='/auth/login' className='self-center'>
                    Login
                </Link>
                <Box className='text-center' sx={{color: 'orange'}}>
                    {!state?.error.includes('Email') && !state?.error.includes('Password') && <p>{state?.error}</p>}
                </Box>
            </Stack>
        </form>
    )
}