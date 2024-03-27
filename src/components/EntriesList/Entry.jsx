import { Card, Stack, Typography } from '@mui/material';
import React from 'react';

const Entry = ({ entry }) => {
    console.log(entry);
    return (
        <Stack direction="column" spacing={2}>
            <Typography>
                { entry.title }
            </Typography>
            <Typography>
                { entry.description }
            </Typography>
            <Typography>
                { entry.date }
            </Typography>

        </Stack>
    );
}

export default Entry;
