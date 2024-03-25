import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { isLoggedIn, handleLogin } = useAuth();

    return (
        <Button
        variant="contained"
        style={{
            backgroundColor: '#1DB954',
                color: 'white',
                borderRadius: 50,
                padding: '12px 24px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                '&:hover': {
                    backgroundColor: '#168E3A',
                },
        }}
        onClick={handleLogin}
        >
            Login with Spotify
        </Button>
    );
}

export default Login;
