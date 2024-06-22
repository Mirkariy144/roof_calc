import React, { Fragment, useState } from 'react';
import { RoofModal } from '../shared/NewRoofModal/RoofModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import {
  addRoofType,
  deleteRoofType,
  editRoofType,
} from '../shared/store/reducer/roofListReducer';
import { connect } from 'react-redux';
import { GridRoofTypes } from '../shared/GridItems/GridRoofTypes';
import { DeleteModal } from '../shared/Modal/DeleteModal';

const RoofList = ({
  RoofList,
  addNewRoofType,
  editRoofType,
  deleteRoofType,
}: any) => {
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

  const [openDeleteRoofTypeModal, setOpenDeleteRoofTypeModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const handleClickOpenDeleteRoofTypeModal = (elementId: number) => {
    setOpenDeleteRoofTypeModal(true);
    setElementId(elementId);
  };

  const handleCloseDeleteRoofTypeModal = () => {
    setOpenDeleteRoofTypeModal(false);
  };

  const deleteItemsDispatch = () => {
    deleteRoofType({ roofTypeId: elementId });
    setOpenDeleteRoofTypeModal(false);
  };

  return (
    <Fragment>
      <GridRoofTypes
        items={roofItems}
        editAction={handleClickOpenEditRoofModal}
        deleteAction={handleClickOpenDeleteRoofTypeModal}
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
        <DeleteModal
          Status={openDeleteRoofTypeModal}
          handler={handleCloseDeleteRoofTypeModal}
          deleteItemsDispatch={deleteItemsDispatch}
          Title="Удаление слоя кровли"
          Text="Вы действительно хотите удалить слои кровли?"
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
    deleteRoofType: (data: any) => {
      dispatch(deleteRoofType(data));
    },
  };
};

export const RoofListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoofList);
