import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

interface NewItemModalProps {
  handler: () => void;
  Title?: string;
  Text?: string;
  Close?: string;
  Status: boolean;
}

export const NewItemModal = ({
  handler,
  Title,
  Text,
  Close,
  Status,
}: NewItemModalProps) => {
  return (
    <Dialog open={Status} onClose={handler}>
      <DialogTitle>{Title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{Text}</DialogContentText>
        <TextField />
      </DialogContent>
      <DialogActions>
        <Button onClick={handler}>Отмена</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
