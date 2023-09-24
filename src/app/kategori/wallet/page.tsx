import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

export default function StarredPage() {

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         <Typography variant="h2" gutterBottom>
          Wallet Produk
        </Typography>

        
      </Box>
    </Container>
  );
}