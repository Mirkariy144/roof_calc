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
        queueId: data.payload.queueId,
        projectId: data.payload.projectId,
      });
    },
  },
});

export const { addSection } = sectionsReducer.actions;

export default sectionsReducer.reducer;
