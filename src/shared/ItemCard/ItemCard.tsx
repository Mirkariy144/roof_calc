import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import ButtonRouter from './test';
import { Link as RouterLink } from 'react-router-dom';

export const ItemCard = ({
  name,
  projectId,
}: {
  name: string;
  projectId: number;
}) => {
  const card = (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          component={RouterLink}
          to={`/${name}/${projectId}`}
        >
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
