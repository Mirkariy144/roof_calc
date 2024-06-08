import React, { useState } from 'react';
import { NewRoofModal } from '../shared/NewRoofModal/NewRoofModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';

export const RoofList = () => {
  const { projectId, queueId, sectionId } = useParams();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={s.button}>
      <NewRoofModal Status={open} handler={handleClose} />
      <AddNewItemButton
        name="Добавить секцию"
        variant="outlined"
        handler={handleClickOpen}
      />
    </div>
  );
};
