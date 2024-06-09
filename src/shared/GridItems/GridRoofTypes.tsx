import { Box, Grid } from '@mui/material';
import React from 'react';
import { RoofTypeCard } from '../ItemCard/RoofTypeCard';
import { roofLayers } from './../NewRoofModal/roofLayers';

interface GridItemsProps {
  items: [];
}

export const GridRoofTypes = ({ items }: GridItemsProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {items.map(
          (item: {
            name: string;
            projectId: number;
            queueId: number;
            sectionId: number;
            roofTypeId: number;
            squareMeters: number;
            roofLayers: [];
          }) => (
            <Grid
              item
              sx={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              key={item.roofTypeId}
            >
              <RoofTypeCard
                name={item.name}
                squareMeters={item.squareMeters}
                roofLayers={item.roofLayers}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
