import React, { useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { ItemModal } from '../shared/Modal/ItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  addSection,
  deleteSection,
  editSection,
} from '../shared/store/reducer/sectionsReducer';
import { DeleteModal } from '../shared/Modal/DeleteModal';
import { deleteRoofType } from '../shared/store/reducer/roofListReducer';

export const SectionsList = ({
  Sections,
  addNewSection,
  editSection,
  deleteSection,
  deleteRoofType,
}: any) => {
  const { queueId } = useParams();

  const sectionItems = Sections.sections.filter(
    (item: { name: string; projectId: string; queueId: string }) =>
      queueId ? queueId == item.queueId : null
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openEditItemModal, setOpenEditItemModal] = useState(false);

  const [elementId, setElementId] = useState(0);

  const handleClickOpenEditItemModal = (elementId: number) => {
    setOpenEditItemModal(true);
    setElementId(elementId);
  };

  const handleCloseEditItemModal = () => {
    setOpenEditItemModal(false);
  };

  const [openDeleteItemModal, setOpenDeleteItemModal] = useState(false);

  const handleClickOpenDeleteItemModal = (elementId: number) => {
    setOpenDeleteItemModal(true);
    setElementId(elementId);
  };

  const handleCloseDeleteItemModal = () => {
    setOpenDeleteItemModal(false);
  };

  const deleteItemsDispatch = () => {
    deleteSection({ sectionId: elementId });
    deleteRoofType({ sectionId: elementId });
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
          Status={open}
          handler={handleClose}
          Title="Новыя секция"
          Text="Создайте новую секцию"
          dispatchNew={addNewSection}
          label="Обозначьте секцию"
        />
        <ItemModal
          Status={openEditItemModal}
          handler={handleCloseEditItemModal}
          Title="Изменение карточки"
          Text="Изменение карточки секции"
          dispatchNew={editSection}
          label="Введите новое название секции"
          elementId={elementId}
        />
        <DeleteModal
          handler={handleCloseDeleteItemModal}
          Title={'Вы действительно хотите удалить секцию?'}
          Text={
            'Это повлечёт за собой удаление всех связанных с ней данных (кровли)'
          }
          Status={openDeleteItemModal}
          deleteItemsDispatch={deleteItemsDispatch}
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

let mapStateToProps = (state: any) => {
  return {
    Sections: state.Sections,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addNewSection: (data: any) => {
      dispatch(addSection(data));
    },
    editSection: (data: any) => {
      dispatch(editSection(data));
    },
    deleteSection: (data: any) => {
      dispatch(deleteSection(data));
    },
    deleteRoofType: (data: any) => {
      dispatch(deleteRoofType(data));
    },
  };
};

export const SectionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionsList);
