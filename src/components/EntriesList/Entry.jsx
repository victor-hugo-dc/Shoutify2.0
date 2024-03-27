import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const cardStyle = {
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'left',
};

const imageStyle = {
    width: 150,
    height: 150,
    borderRadius: '50%',
    margin: 'auto',
};

const textStyle = {
    fontSize: '1.2rem',
};

const Entry = ({ entry }) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = new Date(entry.date);

    return (
        <Card style={cardStyle}>
            <Stack direction="row">
                <CardMedia style={{ width: '100px', height: '100px', marginRight: '16px' }} image={entry.song.album.images[0].url} title={entry.song.name} />
                <CardContent>
                    <Typography variant="h5" component="h2" style={textStyle}>
                        on <b>{entry.song.name}</b> by {entry.song.album.artists[0].name}: {entry.title}
                    </Typography>
                    <Typography color="textSecondary" style={textStyle}>
                        {entry.description}
                    </Typography>
                    <Typography variant="body2" component="p" style={textStyle}>
                        {date.toLocaleString('en-US', options)}
                    </Typography>
                </CardContent>
            </Stack>
        </Card>
 
    );
}

export default Entry;
