import { Button, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext';

const cardStyle = {
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
};

const Login = () => {
    const { handleLogin } = useAuth();

    return (
        <Card style={cardStyle}>
            <Stack spacing={2}>
            <Typography variant='h4'>Shoutify</Typography>
            <Typography variant='paragraph'>An electronic journal for all of your favorite music.</Typography>
            <Button
                variant="contained"
                style={{
                    backgroundColor: '#1DB954',
                        color: 'white',
                        borderRadius: 50,
                        padding: '12px 24px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: '#168E3A',
                        },
                }}
                onClick={handleLogin}
            >
            <Typography>Login with Spotify</Typography>
            </Button>
            </Stack>
        </Card>
    );
}

export default Login;
