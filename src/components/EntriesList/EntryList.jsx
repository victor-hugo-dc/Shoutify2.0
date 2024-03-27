import React from 'react';
import Entry from './Entry';
import { Stack } from '@mui/material';

const EntryList = ({ entries }) => {
    return (
        <Stack direction="column" spacing={2} sx={{ width: "60vw" }}>
            { entries && entries.map((entry) => <Entry key={entry.id} entry={entry}/>)}
        </Stack>
    )
}

export default EntryList;
