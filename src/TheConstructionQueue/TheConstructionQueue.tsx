import React, { useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { NewItemModal } from '../shared/Modal/NewItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addQueue } from '../shared/store/reducer/theConstructionQueueReducer';

export const TheConstructionQueue = ({ ProjectQueue, addNewQueue }: any) => {
  const { projectId } = useParams();

  const queueItems = ProjectQueue.projectQueue.filter(
    (item: { name: string; projectId: string }) =>
      projectId ? projectId === item.projectId : null
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridItems items={queueItems} />
      <div className={s.button}>
        <NewItemModal
          Status={open}
          handler={handleClose}
          Title="Новыя очередь строительства"
          Text="Создайте новую очередь строительства"
          dispatchNew={addNewQueue}
          label="Введите очередь строительства"
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
  };
};

export const TheConstructionQueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheConstructionQueue);
