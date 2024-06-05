import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

interface NewItemModalProps {
  handler: () => void;
  Title?: string;
  Text?: string;
  Close?: string;
  Status: boolean;
  dispatchNew: (data: any) => void;
}

export const NewItemModal = ({
  handler,
  Title,
  Text,
  Close,
  Status,
  dispatchNew,
}: NewItemModalProps) => {
  const { name, projectId, queueId, sectionId } = useParams();

  const checkParams = () => {
    if (sectionId) {
      return {
        projectId: projectId,
        queueId: queueId,
        sectionId: sectionId,
      };
    } else if (queueId) {
      return {
        projectId: projectId,
        queueId: queueId,
      };
    } else if (projectId) {
      return {
        projectId: projectId,
      };
    }
  };

  return (
    <Dialog
      open={Status}
      onClose={handler}
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
          dispatchNew({ name: text, ...checkParams() });
          handler();
        },
      }}
    >
      <DialogTitle>{Title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{Text}</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          name="text"
          label="Название проекта"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handler}>Отмена</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
