import { Container, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getJournalEntries, getUserId } from '../Api';
import NoEntries from '../components/EntriesList/NoEntries';
import EntryList from '../components/EntriesList/EntryList';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import Profile from '../components/Profile';

const Journal = () => {
    const [entries, setEntries] = useState([]);
    const [user, setUser] = useState(null);
    const { token } = useAuth();
    useEffect(() => {
        const getInfo = async () => {
            try {
                const _entries = await getJournalEntries();
                setEntries(_entries);

                const _user = await getUserId(token);
                console.log(_user);
                setUser(_user);

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
    )
}

export default Journal;
