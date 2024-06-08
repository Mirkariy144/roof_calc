import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React from 'react';

interface NewRoofModalProps {
  Status: boolean;
  handler: () => void;
}

export const NewRoofModal = ({ Status, handler }: NewRoofModalProps) => {
  return (
    <Dialog open={Status} onClose={handler}>
      <DialogTitle></DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="text"
          label="Название кровли"
          type="text"
          variant="standard"
          fullWidth
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="value"
          label="Квадратура"
          type="number"
          variant="standard"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handler}>Отмена</Button>
        <Button type="submit">Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};
