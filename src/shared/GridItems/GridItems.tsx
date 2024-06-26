import { Box, Grid } from '@mui/material';
import React from 'react';
import { ItemCard } from '../ItemCard/ItemCard';

interface GridItemsProps {
  items: [];
  editAction: (elementId: number) => void;
  deleteAction: (elementId: number) => void;
}

export const GridItems = ({
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
            queueId?: number;
            sectionId?: number;
            roofTypeId?: number;
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
                  : item.projectId
              }
            >
              <ItemCard
                name={item.name}
                elementId={
                  item.sectionId
                    ? item.sectionId
                    : item.queueId
                    ? item.queueId
                    : item.projectId
                }
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
