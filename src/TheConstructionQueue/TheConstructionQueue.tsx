import React, { useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addQueue,
  deleteQueue,
  editQueue,
} from '../shared/store/reducer/theConstructionQueueReducer';
import { deleteSection } from '../shared/store/reducer/sectionsReducer';
import { DeleteModal } from '../shared/Modal/DeleteModal';
import { deleteRoofType } from '../shared/store/reducer/roofListReducer';

export const TheConstructionQueue = ({
  ProjectQueue,
  addNewQueue,
  editQueue,
  deleteQueue,
  deleteSection,
  deleteRoofType,
}: any) => {
  const { projectId } = useParams();

  const queueItems = ProjectQueue.projectQueue.filter(
    (item: { name: string; projectId: string }) =>
      projectId ? projectId == item.projectId : null
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

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  const handleClickOpenDeleteItemModal = (elementId: number) => {
    setOpenDeleteItemModal(true);
    setElementId(elementId);
  };

  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  };

  const deleteItemsDispatch = () => {
    deleteSection({ queueId: elementId });
    deleteQueue({ queueId: elementId });
    deleteRoofType({ queueId: elementId });
    setOpenDeleteItemModal(false);
  };

  return (
    <div>
      <GridItems
        items={queueItems}
        editAction={handleClickOpenEditItemModal}
        deleteAction={handleClickOpenDeleteItemModal}
      />
      <div className={s.button}>
        <ItemModal
          Status={open}
          handler={handleClose}
          Title="Новая очередь строительства"
          Text="Создайте новую очередь строительства"
          dispatchNew={addNewQueue}
          label="Введите название очереди строительства"
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки очереди строительства"
          dispatchNew={editQueue}
          label="Введите новое название очереди строительства"
          elementId={elementId}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить очередь?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ней данных (секции и кровли)'
          }
          Status={openDeleteItemModal}
          deleteItemsDispatch={deleteItemsDispatch}
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
    deleteQueue: (data: any) => {
      dispatch(deleteQueue(data));
    },
    deleteSection: (data: any) => {
      dispatch(deleteSection(data));
    },

    deleteRoofType: (data: any) => {
      dispatch(deleteRoofType(data));
    },
  };
};

export const TheConstructionQueueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheConstructionQueue);
