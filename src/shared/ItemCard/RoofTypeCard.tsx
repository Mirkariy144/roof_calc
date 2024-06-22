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
  const roofLayersTypography = roofLayers.map(
    (item: {
      name: string;
      layerId: number;
      composition?: {
        name1: string;
        name2: string;
        name1Value?: number;
        name2Value?: number;
      };
    }) => (
      <Typography
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
        key={item.layerId}
      >
        {item.composition
          ? item.composition.name1 + '  ' + item.composition.name1Value
          : item.name}
        {item.composition
          ? item.composition.name2 + ' ' + item.composition.name2Value
          : null}
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
