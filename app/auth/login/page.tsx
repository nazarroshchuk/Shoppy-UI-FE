import {Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";

export default function Login() {
    return (
        <Stack spacing={2} className='w-full max-w-xs'>
            <TextField type='email' label='Email' placeholder='Email' variant='outlined'/>
            <TextField type='password' label='Password' placeholder='Password' variant='outlined'/>
            <Button type='submit' variant='contained' color='primary'>Login</Button>
            <Link component={NextLink} href='/auth/signup' className='self-center'>
                Signup
            </Link>
        </Stack>
    )
}