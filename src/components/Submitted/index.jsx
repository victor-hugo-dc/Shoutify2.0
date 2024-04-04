import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

const Submitted = () => {
    return (
        <Box>
            <Typography variant="h6" gutterBottom>
                Submitted
            </Typography>
            <CheckCircleIcon style={{ color: "black", fontSize: 40 }} />
        </Box>
    )
}

export default Submitted;