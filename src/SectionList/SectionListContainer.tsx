import React, { useState } from 'react';
import { GridItems } from '../shared/GridItems/GridItems';
import { NewItemModal } from '../shared/Modal/NewItemModal';
import { AddNewItemButton } from '../shared/button/AddNewItemButton';
import s from '../app/appStyles/App.module.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSection } from '../shared/store/reducer/sectionsReducer';

export const SectionsList = ({ Sections, addNewSection }: any) => {
  const { queueId } = useParams();

  const sectionItems = Sections.sections.filter(
    (item: { name: string; projectId: string; queueId: string }) =>
      queueId ? queueId === item.queueId : null
  );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <GridItems items={sectionItems} />
      <div className={s.button}>
        <NewItemModal
          Status={open}
          handler={handleClose}
          Title="Новыя секция"
          Text="Создайте новую секцию"
          dispatchNew={addNewSection}
          label="Обозначьте секцию"
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
  };
};

export const SectionListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionsList);
