import { createSlice } from '@reduxjs/toolkit';

let idChecker = 0;

const sectionsReducer = createSlice({
  name: 'Sections',
  initialState: {
    sections: [],
  },
  reducers: {
    addSection: (state: any, data: { payload: any }) => {
      state.sections.push({
        name: data.payload.name,
        sectionId: ++idChecker,
        queueId: data.payload.queueId * 1,
        projectId: data.payload.projectId * 1,
      });
    },
    editSection: (state: any, data: { payload: any }) => {
      state.sections.find(
        (item: any) => item.sectionId === data.payload.elementId
      ).name = data.payload.name;
    },

    deleteSection: (state: any, data: { payload: any }) => {
      if (data.payload.projectId) {
        state.sections = state.sections.filter(
          (item: any) => item.projectId !== data.payload.projectId
        );
      } else if (data.payload.queueId) {
        state.sections = state.sections.filter(
          (item: any) => item.queueId !== data.payload.queueId
        );
      } else {
        state.sections = state.sections.filter(
          (item: any) => item.sectionId !== data.payload.sectionId
        );
      }
    },
  },
});

export const { addSection, editSection, deleteSection } =
  sectionsReducer.actions;

export default sectionsReducer.reducer;
