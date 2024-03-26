import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { LineWave } from 'react-loader-spinner';

const paperStyle = {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(256, 256, 256)',
};

const textStyle = {
    fontSize: '1.2rem',
};

const NoEntries = (props) => {
    return (
        <>
            <Paper style={paperStyle} sx={{ width: "60vw" }}>
                <Typography style={textStyle}>
                    No Entries Found
                </Typography>
            </Paper>
        </>
    );
}

export default NoEntries;
