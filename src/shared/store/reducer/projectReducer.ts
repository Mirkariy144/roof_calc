import { createSlice } from '@reduxjs/toolkit';

let idChecker = 0;

const projectsReducer = createSlice({
  name: 'Projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state: any, data: { payload: any }) => {
      state.projects.push({ name: data.payload.name, projectId: ++idChecker });
    },
  },
});

export const { addProject } = projectsReducer.actions;

export default projectsReducer.reducer;
