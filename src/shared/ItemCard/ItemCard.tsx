import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { Fragment } from 'react';

export const ItemCard = ({ name }: { name: string }) => {
  const card = (
    <Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
    </Fragment>
  );

  return (
    <Box sx={{ width: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
