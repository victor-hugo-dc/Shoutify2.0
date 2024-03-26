import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const cardStyle = {
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
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

const Profile = ({ user }) => {
  // Checking if images array is available and has at least one image
    const imageUrl = user.images && user.images.length > 0 ? user.images[0].url : '';
    return (
        <Card style={cardStyle}>
            <CardMedia
                component="img"
                alt="Profile"
                image={imageUrl}
                title="Profile Image"
                style={imageStyle}
              />
            <CardContent>
                <Typography variant="h5" component="h2" style={textStyle}>
                    {user.display_name}
                </Typography>
                <Typography color="textSecondary" style={textStyle}>
                    {user.id}
                </Typography>
                <Typography variant="body2" component="p" style={textStyle}>
                    Followers: {user.followers.total}
                </Typography>
                <Typography variant="body2" component="p" style={textStyle}>
                    Country: {user.country}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Profile;

