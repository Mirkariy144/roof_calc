import { Box, Grid } from '@mui/material';
import React from 'react';
import { RoofTypeCard } from '../ItemCard/RoofTypeCard';
import { roofLayers } from './../NewRoofModal/roofLayers';

interface GridItemsProps {
  items: [];
  editAction: (elementId: number, name?: string, squareMeters?: number) => void;
  deleteAction: (elementId: number) => void;
}

export const GridRoofTypes = ({
  items,
  editAction,
  deleteAction,
}: GridItemsProps) => {
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
            roofId: number;
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
              key={item.roofId}
            >
              <RoofTypeCard
                elementId={item.roofId}
                name={item.name}
                squareMeters={item.squareMeters}
                roofLayers={item.roofLayers}
                editAction={editAction}
                deleteAction={deleteAction}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
