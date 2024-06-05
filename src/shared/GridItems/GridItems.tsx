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
        {items.map(
          (item: {
            name: string;
            projectId: number;
            queueId?: number;
            sectionId?: number;
          }) => (
            <Grid
              item
              sx={{
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
              key={
                item.sectionId
                  ? item.sectionId
                  : item.queueId
                  ? item.queueId
                  : item.sectionId
              }
            >
              <ItemCard
                name={item.name}
                projectId={
                  item.sectionId
                    ? item.sectionId
                    : item.queueId
                    ? item.queueId
                    : item.projectId
                }
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
