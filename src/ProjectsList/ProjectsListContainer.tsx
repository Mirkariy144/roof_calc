import React, { useEffect, useState } from 'react';
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
import { deleteRoofType } from '../shared/store/reducer/roofListReducer';
import {
  axiosDeleteProject,
  axiosGetProjects,
  axiosEditProject,
  axiosNewProject,
} from '../shared/API/Api';

const ProjectsList = ({
  Projects,
  addNewProject,
  editProject,
  deleteProject,
  deleteQueue,
  deleteSection,
  deleteRoofType,
}: {
  Projects: any;
  addNewProject: any;
  editProject: any;
  deleteProject: any;
  deleteQueue: any;
  deleteSection: any;
  deleteRoofType: any;
}) => {
  const [projects, setProjects] = useState<[]>([]);

  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  useEffect(() => {
    axiosGetProjects().then((data) => {
      setProjects(data);
    });
  }, [openEditItemModal, openDeleteItemModal, openNewItem]);

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

  const deleteItem = () => {
    axiosDeleteProject(elementId);
    setOpenDeleteItemModal(false);
  };

  return (
    <div>
      <GridItems
        items={projects}
        editAction={handleClickOpenEditItemModal}
        deleteAction={handleClickOpenDeleteItemModal}
      />
      <div className={s.button}>
        <ItemModal
          Status={openNewItem}
          handler={handleCloseNewItemModal}
          Title="Новый проект"
          Text="Создайте новый проект"
          label="Введите название проекта"
          API={axiosNewProject}
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки проекта"
          label="Введите новое название проекта"
          projectId={elementId}
          API={axiosEditProject}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить проект?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ним данных (очереди, секции и кровли)'
          }
          Status={openDeleteItemModal}
          deleteItem={deleteItem}
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
    deleteRoofType: (data: any) => {
      dispatch(deleteRoofType(data));
    },
  };
};

export const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
