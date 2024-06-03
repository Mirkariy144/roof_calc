import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';

export const ItemCard = ({ name }: { name: string }) => {
  const card = (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Open Project
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ width: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
