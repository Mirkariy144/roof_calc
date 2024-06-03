import React, { useState } from 'react';
import s from '../app/appStyles/App.module.css';
import { connect } from 'react-redux';
import { GridItems } from '../shared/GridItems/GridItems';
import { NewItemModal } from '../shared/Modal/NewItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import { addProject } from '../shared/store/reducer/projectReducer';

const ProjectsList = ({
  Projects,
  addNewProject,
}: {
  Projects: any;
  addNewProject: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridItems items={Projects.projects} />
      <div className={s.button}>
        <NewItemModal
          Status={open}
          handler={handleClose}
          Title="Новый проект"
          Text="Создайте новый проект"
          dispatchNew={addNewProject}
        />
        <AddNewItemButton
          name="Добавить проект"
          variant="outlined"
          handler={handleClickOpen}
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
  };
};

export const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
