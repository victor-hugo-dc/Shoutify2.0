import React from 'react';
import Track from './Track';
import { Stack } from '@mui/material';

const TrackList = ({ tracks }) => {
    console.log(tracks);
    return (
        <Stack spacing={2}>
            { tracks && tracks.map((track, index) => (
                <Track key={index} {...track}/>
            )) }
        </Stack>
    )
}

export default TrackList;
