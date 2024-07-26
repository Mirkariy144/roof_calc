import React, { useEffect, useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { DeleteModal } from '../shared/Modal/DeleteModal';
import {
  axiosDeleteSection,
  axiosEditSection,
  axiosGetSections,
  axiosNewSection,
} from '../shared/API/Api';

export const SectionsListContainer = ({
  Sections,
  addNewSection,
  editSection,
  deleteSection,
  deleteRoofType,
}: any) => {
  const { projectId, queueId } = useParams();

  const projectParamsToNumber = Number(projectId);

  const queueParamsToNumber = Number(queueId);

  const [sectionItems, setSectionItems] = useState<[]>([]);

  const [openNewItem, setOpenNewItem] = useState(false);

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  useEffect(() => {
    axiosGetSections(queueParamsToNumber).then((data) => {
      setSectionItems(data);
    });
  }, [
    openEditItemModal,
    openDeleteItemModal,
    openNewItem,
    queueParamsToNumber,
  ]);

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
    axiosDeleteSection(elementId);
    setOpenDeleteItemModal(false);
  };

  return (
    <div>
      <GridItems
        items={sectionItems}
        editAction={handleClickOpenEditItemModal}
        deleteAction={handleClickOpenDeleteItemModal}
      />
      <div className={s.button}>
        <ItemModal
          Status={openNewItem}
          handler={handleClose}
          Title="Новыя секция"
          Text="Создайте новую секцию"
          label="Обозначьте секцию"
          projectId={projectParamsToNumber}
          queueId={queueParamsToNumber}
          API={axiosNewSection}
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки секции"
          label="Введите новое название секции"
          sectionId={elementId}
          API={axiosEditSection}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить секцию?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ней данных (кровли)'
          }
          Status={openDeleteItemModal}
          deleteItem={deleteItem}
        />
        <AddNewItemButton
          name="Добавить секцию"
          variant="outlined"
          handler={handleClickOpen}
        />
      </div>
    </div>
  );
};
