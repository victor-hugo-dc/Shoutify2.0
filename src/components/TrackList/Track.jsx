import React from 'react';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Track = ({ track }) => {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '16px', marginBottom: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', transition: 'transform 0.2s ease', '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' } }}>
        <CardMedia style={{ width: '100px', height: '100px', marginRight: '16px' }} image={track.album.images[0].url} title={track.name} />
            <CardContent style={{ flex: 1 }}>
                <Typography variant="h6" component="h3">{track.name}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{track.artists.map(artist => artist.name).join(', ')}</Typography>
                <Typography variant="subtitle2" color="textSecondary">{track.album.name}</Typography>
            </CardContent>
            <IconButton onClick={() => navigate(`/post/${track.id}`)}>
                <AddIcon/>                
            </IconButton>
        </Card>
    );
}

export default Track;

