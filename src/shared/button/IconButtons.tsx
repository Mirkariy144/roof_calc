import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import React from 'react';

interface IconButtonsProps {
  editAction: (elementId: number, name?: string, squareMeters?: number) => void;
  elementId: number;
  name?: string;
  squareMeters?: number;
  deleteAction: (elementId: number) => void;
}

export const IconButtons = ({
  editAction,
  elementId,
  deleteAction,
  name,
  squareMeters,
}: IconButtonsProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Удалить" onClick={() => deleteAction(elementId)}>
        <DeleteForeverOutlined sx={{ color: 'red' }} />
      </IconButton>
      <IconButton
        aria-label="Отредактировать"
        onClick={() => editAction(elementId, name, squareMeters)}
      >
        <EditOutlined color="primary" />
      </IconButton>
    </Stack>
  );
};
