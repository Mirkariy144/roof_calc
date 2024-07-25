import React, { Fragment, useEffect, useState } from 'react';
import { RoofModal } from '../shared/NewRoofModal/RoofModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { GridRoofTypes } from '../shared/GridItems/GridRoofTypes';
import { DeleteModal } from '../shared/Modal/DeleteModal';
import {
  axiosDeleteRoofType,
  axiosEditRoofType,
  axiosGetRoofTypes,
  axiosNewRoofType,
} from '../shared/API/Api';

export const RoofListContainer = ({
  RoofList,
  addNewRoofType,
  editRoofType,
  deleteRoofType,
}: any) => {
  const { sectionId } = useParams();

  const sectionParamsToNumber = Number(sectionId);

  const [roofItems, setRoofItems] = useState<[]>([]);

  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditRoofModal, setOpenEditRoofModal] = useState(false);

  const [openDeleteRoofTypeModal, setOpenDeleteRoofTypeModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  useEffect(() => {
    axiosGetRoofTypes(sectionParamsToNumber).then((data) => {
      data.map((item: any) => {
        item.roofLayers = Object.values(JSON.parse(item.roofLayers));
      });
      setRoofItems(data);
    });
  }, [
    openEditRoofModal,
    openDeleteRoofTypeModal,
    sectionParamsToNumber,
    openNewItem,
  ]);

  const handleClickOpen = () => {
    setOpenNewItem(true);
  };

  const handleClose = () => {
    setOpenNewItem(false);
  };

  const [editRoofInfo, setEditRoofInfo] = useState<{
    name?: string;
    squareMeters?: number;
    elementId: number;
  }>({
    name: '',
    squareMeters: 0,
    elementId: 0,
  });

  console.log(editRoofInfo);

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

  const handleClickOpenDeleteRoofTypeModal = (elementId: number) => {
    setOpenDeleteRoofTypeModal(true);
    setElementId(elementId);
  };

  const handleCloseDeleteRoofTypeModal = () => {
    setOpenDeleteRoofTypeModal(false);
  };

  const deleteItem = () => {
    axiosDeleteRoofType(elementId);
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
          Status={openNewItem}
          handler={handleClose}
          API={axiosNewRoofType}
          title="Создание слоя кровли"
          text="Дайте название кровле и укажите квадратуру работ"
        />
        <RoofModal
          Status={openEditRoofModal}
          handler={handleCloseEditRoofModal}
          API={axiosEditRoofType}
          title="Редактирование слоя кровли"
          text="Дайте название кровле и укажите квадратуру работ"
          roofInfo={editRoofInfo}
        />
        <DeleteModal
          Status={openDeleteRoofTypeModal}
          handler={handleCloseDeleteRoofTypeModal}
          deleteItem={deleteItem}
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
