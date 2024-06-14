import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

interface IconButtonsProps {
  editAction: (elementId: number) => void;
  elementId: number;
  deleteAction: (elementId: number) => void;
}

export const IconButtons = ({
  editAction,
  elementId,
  deleteAction,
}: IconButtonsProps) => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="Удалить">
        <DeleteForeverOutlined
          sx={{ color: 'red' }}
          onClick={() => deleteAction(elementId)}
        />
      </IconButton>
      <IconButton aria-label="Отредактировать">
        <EditOutlined color="primary" onClick={() => editAction(elementId)} />
      </IconButton>
    </Stack>
  );
};
