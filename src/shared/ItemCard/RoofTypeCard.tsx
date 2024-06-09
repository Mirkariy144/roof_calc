import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import { EditButton } from '../button/editButton';

export const RoofTypeCard = ({
  name,
  squareMeters,
  roofLayers,
}: {
  name: string;
  squareMeters: number;
  roofLayers: { name: string; layerId: number }[];
}) => {
  const roofLayersTypography = roofLayers.map(
    (item: { name: string; layerId: number }) => (
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
        key={item.layerId}
      >
        {item.name}
      </Typography>
    )
  );

  const card = (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {squareMeters}
        </Typography>
        {roofLayersTypography}
      </CardContent>
      <CardActions>
        <EditButton />
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ width: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
