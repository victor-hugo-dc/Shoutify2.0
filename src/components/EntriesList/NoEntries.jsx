import { Box, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getUserId } from '../../Api';

const paperStyle = {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(256, 256, 256)',
};

const textStyle = {
    fontSize: '1.2rem',
};

const NoEntries = (props) => {
    console.log(props);
    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            try {
                const _user = await getUserId(props.token);
                setUser(_user);
                console.log(_user);
            } catch (error) {
               console.error(error); 
            }
        };
        getUser();
    }, []);

    return (
        <Paper style={paperStyle}>
            <Typography style={textStyle}>
                No Entries Found
                {user && user.id}
            </Typography>
        </Paper>
    );
}

export default NoEntries;
