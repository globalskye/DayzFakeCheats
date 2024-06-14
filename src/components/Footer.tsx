import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
            <Typography variant="body1">My footer content here.</Typography>
        </Box>
    );
};

export default Footer;