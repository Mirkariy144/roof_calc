import React, { useState } from 'react';
import s from '../app/appStyles/App.module.css';
import { connect } from 'react-redux';
import { GridItems } from '../shared/GridItems/GridItems';
import { NewItemModal } from '../shared/Modal/NewItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';

const ProjectsList = ({ Projects }: { Projects: any }) => {
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
  return {};
};

export const ProjectsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsList);
