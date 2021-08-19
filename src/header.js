import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{ 'justifyContent': 'center' }} >

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Food Classification
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
