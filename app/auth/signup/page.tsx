import {Button, Link, Stack, TextField} from "@mui/material";
import NextLink from "next/link";

export default function Page() {
    return (
        <Stack spacing={2} className='w-full max-w-xs'>
            <TextField type='email' label='Email' placeholder='Email' variant='outlined'/>
            <TextField type='password' label='Password' placeholder='Password' variant='outlined'/>
            <Button type='submit' variant='contained' color='primary'>Signup</Button>
            <Link component={NextLink} href='/auth/login' className='self-center'>
                Login
            </Link>
        </Stack>
    )
}