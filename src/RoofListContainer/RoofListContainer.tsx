import React, { Fragment, useState } from 'react';
import { NewRoofModal } from '../shared/NewRoofModal/NewRoofModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { addRoofType } from '../shared/store/reducer/roofListReducer';
import { connect } from 'react-redux';
import { GridRoofTypes } from '../shared/GridItems/GridRoofTypes';

const RoofList = ({ RoofList, addNewRoofType }: any) => {
  const { projectId, queueId, sectionId } = useParams();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <GridRoofTypes items={RoofList.layers} />
      <div className={s.button}>
        <NewRoofModal
          Status={open}
          handler={handleClose}
          dispatchNew={addNewRoofType}
        />
        <AddNewItemButton
          name="Добавить секцию"
          variant="outlined"
          handler={handleClickOpen}
        />
      </div>
    </Fragment>
  );
};

let mapStateToProps = (state: any) => {
  return {
    RoofList: state.RoofList,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addNewRoofType: (data: any) => {
      dispatch(addRoofType(data));
    },
  };
};

export const RoofListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoofList);
