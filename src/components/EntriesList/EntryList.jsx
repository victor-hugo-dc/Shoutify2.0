import React from 'react';
import Entry from './Entry';
import { Stack } from '@mui/material';

const EntryList = ({ entries }) => {
    console.log(entries);
    return (
        <Stack direction="column">
            { entries && entries.map((entry) => <Entry entry={entry}/>)}
        </Stack>
    )
}

export default EntryList;
