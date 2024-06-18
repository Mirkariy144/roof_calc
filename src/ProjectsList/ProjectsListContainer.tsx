import React, { useState } from 'react';
import s from '../app/appStyles/App.module.css';
import { connect } from 'react-redux';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import {
  addProject,
  deleteProject,
  editProject,
} from '../shared/store/reducer/projectReducer';
import { deleteQueue } from '../shared/store/reducer/theConstructionQueueReducer';
import { deleteSection } from '../shared/store/reducer/sectionsReducer';
import { DeleteModal } from '../shared/Modal/DeleteModal';

const ProjectsList = ({
  Projects,
  addNewProject,
  editProject,
  deleteProject,
  deleteQueue,
  deleteSection,
}: {
  Projects: any;
  addNewProject: any;
  editProject: any;
  deleteProject: any;
  deleteQueue: any;
  deleteSection: any;
}) => {
  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const handleClickOpenNewItemModal = () => {
    setOpenNewItem(true);
  };

  const handleCloseNewItemModal = () => {
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

  const deleteItemsDispatch = () => {
    deleteProject({ projectId: elementId });
    deleteSection({ projectId: elementId });
    deleteQueue({ projectId: elementId });
    setOpenDeleteItemModal(false);
  };

  return (
    <div>
      <GridItems
        items={Projects.projects}
        editAction={handleClickOpenEditItemModal}
        deleteAction={handleClickOpenDeleteItemModal}
      />
      <div className={s.button}>
        <ItemModal
          Status={openNewItem}
          handler={handleCloseNewItemModal}
          Title="Новый проект"
          Text="Создайте новый проект"
          dispatchNew={addNewProject}
          label="Введите название проекта"
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки проекта"
          dispatchNew={editProject}
          label="Введите новое название проекта"
          elementId={elementId}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить проект?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ним данных (очереди, секции и кровли)'
          }
          Status={openDeleteItemModal}
          deleteItemsDispatch={deleteItemsDispatch}
        />
        <AddNewItemButton
          name="Добавить проект"
          variant="outlined"
          handler={handleClickOpenNewItemModal}
        />
      </div>
    </div>
  );
};

let mapStateToProps = (state: any) => {
  return {
    Projects: state.Projects,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addNewProject: (data: any) => {
      dispatch(addProject(data));
    },
    editProject: (data: any) => {
      dispatch(editProject(data));
    },
    deleteProject: (data: any) => {
      dispatch(deleteProject(data));
    },
    deleteQueue: (data: any) => {
      dispatch(deleteQueue(data));
    },
    deleteSection: (data: any) => {
      dispatch(deleteSection(data));
    },
  };
};

export const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
