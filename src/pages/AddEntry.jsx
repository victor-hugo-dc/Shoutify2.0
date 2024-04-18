import { Stack } from '@mui/material';
import React, { useState } from 'react';
import JournalForm from '../sections/journal/JournalForm.jsx';

const AddEntry = () => {
    return (
        <Stack direction='row'>
            <JournalForm />
        </Stack>
    )
}

export default AddEntry;
