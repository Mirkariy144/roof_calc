import { Box, Grid } from '@mui/material';
import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';

interface GridItemsProps {
  items: [];
}

export const GridItems = ({ items }: GridItemsProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {items.map((item: { name: string; id: number }) => (
          <Grid item flexGrow={1} sx={{ padding: '10px' }} key={item.id}>
            <ItemCard name={item.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
