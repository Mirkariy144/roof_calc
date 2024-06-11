import React, { useState } from 'react';
import s from '../app/appStyles/App.module.css';
import { connect } from 'react-redux';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import {
  addProject,
  editProject,
} from '../shared/store/reducer/projectReducer';

const ProjectsList = ({
  Projects,
  addNewProject,
  editProject,
}: {
  Projects: any;
  addNewProject: any;
  editProject: any;
}) => {
  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

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

  return (
    <div>
      <GridItems
        items={Projects.projects}
        editAction={handleClickOpenEditItemModal}
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
          Title="Изменение проекта"
          Text="Изменение карточки проекта проект"
          dispatchNew={editProject}
          label="Введите новое название проекта"
          elementId={elementId}
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
  };
};

export const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
