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
import React, { ReactElement, useState } from 'react';
import { SelectJunction } from './SelectJunction';

const _ = require('lodash');

interface JunctionModalProps {
  status: boolean;
  handler: () => void;
}

export const JunctionModal = ({ status, handler }: JunctionModalProps) => {
  const [line, setLine] = useState<any[]>([]);

  const [junctionLayers, setJunctionLayers] = useState<any>([]);

  console.log(junctionLayers);

  // const newLine: ReactElement = (
  //   <>
  //     <SelectJunction
  //       setJunctionLayers={setJunctionLayers}
  //       junctionLayers={junctionLayers}
  //     />
  //     <TextField
  //       autoFocus
  //       required
  //       margin="dense"
  //       name={line.length.toString()}
  //       label="Примыкание"
  //       type="text"
  //       fullWidth
  //       variant="standard"
  //       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
  //         addInfo(line.length, event.currentTarget.value)
  //       }
  //     />
  //   </>
  // );

  const addInfo = (elementId: number, value: string) => {
    setJunctionLayers((prevData: any) => {
      prevData.filter((item: any) => item.uniqueId === elementId)[0].visota =
        value;
      return prevData;
    });
  };

  const addNewLine = () => {
    setLine((prevLine) => [...prevLine, { id: _.uniqueId() }]);
  };

  const clearLine = () => {
    setLine([]);
  };

  const clearJunctionLayers = () => {
    setJunctionLayers([]);
  };

  return (
    <Dialog
      open={status}
      PaperProps={{
        component: 'form',
        onSubmit: () => {
          handler();
          clearLine();
          clearJunctionLayers();
        },
      }}
    >
      <DialogTitle>{'Текст'}</DialogTitle>
      <DialogContent id="lines">
        <DialogContentText>{'Текст'}</DialogContentText>
        {line?.map((item) => {
          console.log(item);
          return (
            <React.Fragment key={item.id}>
              <SelectJunction
                setJunctionLayers={setJunctionLayers}
                junctionLayers={junctionLayers}
                uniqueId={item.id}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                label="Примыкание"
                type="text"
                fullWidth
                variant="standard"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  addInfo(item.id, event.target.value)
                }
              />
            </React.Fragment>
          );
        })}
      </DialogContent>
      <DialogActions>
        <IconButton aria-label="Добавить примыкание" onClick={addNewLine}>
          <AddIcon color="primary" />
        </IconButton>
        <Button onClick={handler}>Отмена</Button>
        <Button type="submit">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};
