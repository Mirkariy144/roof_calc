import React, { useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addQueue,
  editQueue,
} from '../shared/store/reducer/theConstructionQueueReducer';

export const TheConstructionQueue = ({
  ProjectQueue,
  addNewQueue,
  editQueue,
}: any) => {
  const { projectId } = useParams();

  const queueItems = ProjectQueue.projectQueue.filter(
    (item: { name: string; projectId: string }) =>
      projectId ? projectId === item.projectId : null
  );

  const [open, setOpen] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenEditItemModal = (elementId: number) => {
    setOpenEditItemModal(true);
    setElementId(elementId);
  };

  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  };
  return (
    <div>
      <GridItems items={queueItems} editAction={handleClickOpenEditItemModal} />
      <div className={s.button}>
        <ItemModal
          Status={open}
          handler={handleClose}
          Title="Новыя очередь строительства"
          Text="Создайте новую очередь строительства"
          dispatchNew={addNewQueue}
          label="Введите очередь строительства"
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение проекта"
          Text="Изменение карточки проекта проект"
          dispatchNew={editQueue}
          label="Введите новое название проекта"
          elementId={elementId}
        />
        <AddNewItemButton
          name="Добавить очередь"
          variant="outlined"
          handler={handleClickOpen}
        />
      </div>
    </div>
  );
};

let mapStateToProps = (state: any) => {
  return {
    ProjectQueue: state.ProjectQueue,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addNewQueue: (data: any) => {
      dispatch(addQueue(data));
    },
    editQueue: (data: any) => {
      dispatch(editQueue(data));
    },
  };
};

export const TheConstructionQueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheConstructionQueue);
