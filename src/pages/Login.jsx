import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { isLoggedIn, handleLogin } = useAuth();

    return (
        <Button variant='contained' color='primary' onClick={handleLogin}>
            Login with Spotify
        </Button>
    )
}

export default Login;
