import * as React from 'react';
import { Box, IconButton, AppBar, Toolbar, Badge } from "@mui/material";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const HeaderNav = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ background: 'white', borderBottom: 1, borderColor: 'rgba(0, 0, 0, 0.12)', minHeight: '64px', boxShadow: 'none' }}>
                <Toolbar sx={{ height: '64px' }}>
                    <Box sx={{ flexGrow: 1, flexShrink: 0 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => navigate('/spotify')} size="large" color="black">
                            <Badge color="error">
                                <LibraryMusicIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="black"
                            onClick={() => navigate('/journal')}
                        >
                            <Badge color="error">
                                <AddIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderNav;

