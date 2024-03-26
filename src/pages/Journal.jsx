import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getJournalEntries } from '../Api';
import NoEntries from '../components/EntriesList/NoEntries';
import EntryList from '../components/EntriesList/EntryList';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Journal = () => {
    const [entries, setEntries] = useState([]);
    const { token } = useAuth();
    console.log(token);
    useEffect(() => {
        const getEntries = async () => {
            try {
                const response = await getJournalEntries();
                setEntries(response);

            } catch (error) {
                console.error(error);

            }
        }
        
        getEntries();

    }, []);

    if (!token) {
        <Navigate to={"/auth/login"} replace />
    }

    return (
        <Container>
            { entries.length === 0 ? (
                <NoEntries token={token}/>
            ) : (
                <EntryList entries={entries}/>
            )}                        
        </Container>
    )
}

export default Journal;
