import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getJournalEntries, getUserId } from '../Api';
import NoEntries from '../components/EntriesList/NoEntries';
import EntryList from '../components/EntriesList/EntryList';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Profile from '../components/Profile';
import { LineWave } from 'react-loader-spinner';

const Journal = () => {
    const [entries, setEntries] = useState([]);
    const [user, setUser] = useState(null);
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const _user = await getUserId(token);
                setUser(_user);

                const _entries = await getJournalEntries(_user.id);
                setEntries(_entries);

                setLoading(false);

            } catch (error) {
                console.error(error);

            }
        }
        
        getInfo();

    }, []);

    if (!token) {
        return <Navigate to={"/auth/login"} replace />;
    }

    return (
        <>
        { loading ? (
            <LineWave 
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
            />
        ) : (
        <Container>
            <Stack direction="row" spacing={2}>
            { user && <Profile user={user}/> }
            { entries.length === 0 ? (
                <NoEntries/>
            ) : (
                <EntryList entries={entries}/>
            )}
            </Stack>
        </Container>
        )}
        </>
    )
}

export default Journal;
