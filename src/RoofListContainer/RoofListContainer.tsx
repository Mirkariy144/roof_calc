import React, { Fragment, useState } from 'react';
import { RoofModal } from '../shared/NewRoofModal/RoofModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import {
  addRoofType,
  editRoofType,
} from '../shared/store/reducer/roofListReducer';
import { connect } from 'react-redux';
import { GridRoofTypes } from '../shared/GridItems/GridRoofTypes';

const RoofList = ({ RoofList, addNewRoofType, editRoofType }: any) => {
  const { sectionId } = useParams();

  const roofItems = RoofList.layers.filter((item: { sectionId: string }) =>
    sectionId ? sectionId == item.sectionId : null
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEditRoofModal, setOpenEditRoofModal] = useState(false);

  const [editRoofInfo, setEditRoofInfo] = useState<{
    name?: string;
    squareMeters?: number;
    elementId: number;
  }>({
    name: '',
    squareMeters: 0,
    elementId: 0,
  });

  const handleClickOpenEditRoofModal = (
    elementId: number,
    name?: string,
    squareMeters?: number
  ) => {
    setOpenEditRoofModal(true);
    setEditRoofInfo({ name, squareMeters, elementId });
  };

  const handleCloseEditRoofModal = () => {
    setOpenEditRoofModal(false);
  };

  return (
    <Fragment>
      <GridRoofTypes
        items={roofItems}
        editAction={handleClickOpenEditRoofModal}
      />
      <div className={s.button}>
        <RoofModal
          Status={open}
          handler={handleClose}
          dispatchNew={addNewRoofType}
          title="Создание слоя кровли"
          text="Дайте название кровле и укажите квадратуру работ"
        />
        <RoofModal
          Status={openEditRoofModal}
          handler={handleCloseEditRoofModal}
          dispatchNew={editRoofType}
          title="Редактирование слоя кровли"
          text="Дайте название кровле и укажите квадратуру работ"
          roofInfo={editRoofInfo}
        />
        <AddNewItemButton
          name="Добавить кровлю"
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

    editRoofType: (data: any) => {
      dispatch(editRoofType(data));
    },
  };
};

export const RoofListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoofList);
