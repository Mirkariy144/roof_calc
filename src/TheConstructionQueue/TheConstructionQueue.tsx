import React, { useEffect, useState } from 'react';
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
import {
  axiosDeleteQueue,
  axiosGetQueues,
  axiosNewQueue,
  axiosEditQueue,
} from '../shared/API/Api';

export const TheConstructionQueue = ({
  ProjectQueue,
  addNewQueue,
  editQueue,
  deleteQueue,
  deleteSection,
  deleteRoofType,
}: any) => {
  const { projectId } = useParams<string>();

  const paramsNumber = Number(projectId);

  const [queueItems, setQueueItems] = useState<[]>([]);

  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  useEffect(() => {
    axiosGetQueues(paramsNumber).then((data) => {
      setQueueItems(data);
    });
  }, [openEditItemModal, openDeleteItemModal, openNewItem, paramsNumber]);

  const handleClickOpen = () => {
    setOpenNewItem(true);
  };

  const handleClose = () => {
    setOpenNewItem(false);
  };

  const handleClickOpenEditItemModal = (elementId: number) => {
    setOpenEditItemModal(true);
    setElementId(elementId);
  };

  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  };

  const handleClickOpenDeleteItemModal = (elementId: number) => {
    setOpenDeleteItemModal(true);
    setElementId(elementId);
  };

  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  };

  const deleteItem = () => {
    axiosDeleteQueue(elementId);
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
          Status={openNewItem}
          handler={handleClose}
          Title="Новая очередь строительства"
          Text="Создайте новую очередь строительства"
          projectId={paramsNumber}
          label="Введите название очереди строительства"
          API={axiosNewQueue}
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки очереди строительства"
          label="Введите новое название очереди строительства"
          queueId={elementId}
          API={axiosEditQueue}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить очередь?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ней данных (секции и кровли)'
          }
          Status={openDeleteItemModal}
          deleteItem={deleteItem}
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
