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
import { useParams } from 'react-router-dom';
import { SelectRoofLayers } from './SelectRoofLayers';

interface NewRoofModalProps {
  Status: boolean;
  handler: () => void;
  dispatchNew: (data: any) => void;
}

export const NewRoofModal = ({
  Status,
  handler,
  dispatchNew,
}: NewRoofModalProps) => {
  const { projectId, queueId, sectionId } = useParams();
  const [roofLayers, setSelectedRoofLayers] = useState<any>([]);
  return (
    <Dialog
      open={Status}
      onClose={handler}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const text = formJson.text;
          const squareMeters = formJson.value;
          dispatchNew({
            text,
            squareMeters,
            sectionId,
            queueId,
            projectId,
            roofLayers,
          });
          handler();
        },
      }}
    >
      <DialogTitle>Создание слоя кровли</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Дайте название кровле и укажите квадратуру работ
        </DialogContentText>
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
        <SelectRoofLayers setSelectedRoofLayers={setSelectedRoofLayers} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handler}>Отмена</Button>
        <Button type="submit">Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};
