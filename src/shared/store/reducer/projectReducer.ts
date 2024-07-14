import { createSlice } from '@reduxjs/toolkit';

let idChecker = 0;

const projectsReducer = createSlice({
  name: 'Projects',
  initialState: {
    projects: [],
  },
  reducers: {
    addProject: (state: any, data: { payload: any }) => {
      state.projects = data.payload;
    },
    editProject: (state: any, data: { payload: any }) => {
      state.projects.find(
        (item: any) => item.projectId === data.payload.elementId
      ).name = data.payload.name;
    },

    deleteProject: (state: any, data: { payload: any }) => {
      state.projects = state.projects.filter(
        (item: any) => item.projectId !== data.payload.projectId
      );
    },
  },
});

export const { addProject, editProject, deleteProject } =
  projectsReducer.actions;

export default projectsReducer.reducer;
