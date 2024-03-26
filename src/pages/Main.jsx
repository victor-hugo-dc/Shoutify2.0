import { Button, ButtonGroup, Container, Typography, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getRecentTracks, getUserFavorites } from '../Api';
import TrackList from '../components/TrackList/TrackList';
import { Navigate } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner';

const Main  = () => {
    const { token } = useAuth();
    const [recents, setRecents] = useState([]);
    const [top50, setTop50] = useState([]);
    const [setting, setSetting] = useState('recent');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLists = async () => {
            try {
                const recent_tracks = await getRecentTracks(token);
                setRecents(recent_tracks);

                const top50_tracks = await getUserFavorites("tracks", "short_term", 50, token);
                setTop50(top50_tracks);

                setLoading(false);

            } catch (error) {
               console.error(error);
            }
        };

        getLists();
    }, [])


    if (!token) {
        return <Navigate to={"/auth/login"} replace />;
    }

    return (
        <>
            { !loading && 
                <Container maxWidth="lg">
                    <Stack direction="column" spacing={5} alignItems="center">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button onClick={() => setSetting('recent')}>Recent</Button>
                            <Button onClick={() => setSetting('top50')}>Top 50</Button>
                        </ButtonGroup>
                        <TrackList tracks={setting === 'recent' ? recents : top50}/>
                    </Stack>
                </Container>
            }
            { loading && 
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                />
            }
        </>
    )
}

export default Main;
