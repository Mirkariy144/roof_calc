import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import React, { Fragment } from 'react';

interface IconButtonsProps {
  editAction: (elementId: number) => void;
  elementId: number;
}

export const IconButtons = ({ editAction, elementId }: IconButtonsProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Удалить">
        <DeleteForeverOutlined sx={{ color: 'red' }} />
      </IconButton>
      <IconButton aria-label="Отредактировать">
        <EditOutlined color="primary" onClick={() => editAction(elementId)} />
      </IconButton>
    </Stack>
  );
};
