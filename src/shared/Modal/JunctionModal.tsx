import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

interface JunctionModalProps {
  status: boolean;
  handler: () => void;
}

export const JunctionModal = ({ status, handler }: JunctionModalProps) => {
  const [lineCount, setLineCount] = useState<number>(1);

  const newLine = (
    <TextField
      autoFocus
      required
      margin="dense"
      name="text"
      label="Примыкание"
      type="text"
      fullWidth
      variant="standard"
    />
  );

  return (
    <Dialog
      open={status}
      sx={{
        '& .MuiDialog-paperWidthSm': {
          width: '400px',
        },
      }}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const text = formJson.text;
          handler();
        },
      }}
    >
      <DialogTitle>{'Текст'}</DialogTitle>
      <DialogContent id="lines">
        <DialogContentText>{'Текст'}</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="text"
          label="Примыкание"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <IconButton aria-label="Добавить примыкание" onClick={() => {}}>
          <AddIcon color="primary" />
        </IconButton>
        <Button onClick={handler}>Отмена</Button>
        <Button>Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
