import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Track = (props) => {
    return (
        <Card style={{ display: 'flex', alignItems: 'center', padding: '16px', marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}>
            <CardMedia style={{ width: '100px', height: '100px', marginRight: '16px' }} image={props.track.album.images[0].url} title={props.track.name} />
            <CardContent style={{ flex: 1 }}>
                <Typography variant="h6" component="h3">{props.track.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{props.track.artists.map(artist => artist.name).join(', ')}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{props.track.album.name}</Typography>
            </CardContent>
        </Card>
    );
}

export default Track;
