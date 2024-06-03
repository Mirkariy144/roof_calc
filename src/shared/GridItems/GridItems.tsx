import { Box, Grid } from '@mui/material';
import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';

interface GridItemsProps {
  items: [];
}

export const GridItems = ({ items }: GridItemsProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {items.map((item: { name: string; id: number }) => (
          <Grid
            item
            sx={{
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
            key={item.id}
          >
            <ItemCard name={item.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
