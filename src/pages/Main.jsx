import { Button, ButtonGroup, Container, Typography, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getRecentTracks, getUserFavorites } from '../Api';
import TrackList from '../components/TrackList/TrackList';
import { Navigate } from 'react-router-dom';

const Main  = () => {
    const { token } = useAuth();
    const [recents, setRecents] = useState([]);
    const [top50, setTop50] = useState([]);
    const [setting, setSetting] = useState('recent');

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

    useEffect(() => {
        const getTop50 = async () => {
            try {
                const top50_tracks = await getUserFavorites("tracks", "short_term", 50, token);
                console.log(top50_tracks);
                setTop50(top50_tracks);

            } catch (error) {
                console.error(error); 
            }
        };

        getTop50();
    }, []);

    if (!token) {
        return <Navigate to={"/auth/login"} replace />;
    }

    return (
        <>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={5} alignItems="center">
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button onClick={() => setSetting('recent')}>Recent</Button>
                        <Button onClick={() => setSetting('top50')}>Top 50</Button>
                    </ButtonGroup>
                    <TrackList tracks={setting === 'recent' ? recents : top50}/>
                </Stack>
            </Container>
        </>
    )
}

export default Main;
