import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { Fragment } from 'react';
import { IconButtons } from '../button/IconButtons';

export const RoofTypeCard = ({
  name,
  squareMeters,
  roofLayers,
  elementId,
  editAction,
  deleteAction,
}: {
  name: string;
  squareMeters: number;
  roofLayers: { name: string; layerId: number }[];
  elementId: number;
  editAction: (elementId: number, name?: string, squareMeters?: number) => void;
  deleteAction: (elementId: number) => void;
}) => {
  const roofLayersTypography = roofLayers.map((item: any) => {
    if (item.composition) {
      let materials = Object.values(item.composition);
      return materials.map((item: any) => (
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          key={item}
        >
          {item}
        </Typography>
      ));
    } else {
      return (
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          key={item.layerId}
        >
          {item.name}
        </Typography>
      );
    }
  });

  const card = (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {squareMeters} м2
        </Typography>
        {roofLayersTypography}
      </CardContent>
      <CardActions>
        <IconButtons
          editAction={editAction}
          elementId={elementId}
          deleteAction={deleteAction}
          name={name}
          squareMeters={squareMeters}
        />
      </CardActions>
    </Card>
  );

  return (
    <Box sx={{ width: 250 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
