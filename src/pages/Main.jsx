import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getRecentTracks } from '../Api';
import TrackList from '../components/TrackList/TrackList';
import { Navigate } from 'react-router-dom';

const Main  = () => {
    const { token } = useAuth();
    const [recents, setRecents] = useState([]);

    useEffect(() => {
        const getRecents = async () => {
            try {
                const recent_tracks = await getRecentTracks(token);
                console.log(recent_tracks);
                setRecents(recent_tracks);

            } catch (error) {
               console.error(error); 

            }
        };

        getRecents();
    }, []);

    if (!token) {
        return <Navigate to={"/auth/login"} replace />;
    }

    return (
        <>
            <Container maxWidth="lg">
                <TrackList tracks={recents}/>
            </Container>
        </>
    )
}

export default Main;
