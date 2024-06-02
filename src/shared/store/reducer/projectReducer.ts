import { createSlice } from '@reduxjs/toolkit';

const projectsReducer = createSlice({
  name: 'Projects',
  initialState: {
    projects: [
      { name: 'Проект 1', id: 1 },
      { name: 'Проект 2', id: 2 },
      { name: 'Проект 3', id: 3 },
      { name: 'Проект 4', id: 4 },
      { name: 'Проект 5', id: 5 },
      { name: 'Проект 6', id: 6 },
      { name: 'Проект 7', id: 7 },
      { name: 'Проект 8', id: 8 },
      { name: 'Проект 9', id: 9 },
      { name: 'Проект 10', id: 10 },
      { name: 'Проект 11', id: 11 },
      { name: 'Проект 12', id: 12 },
      { name: 'Проект 13', id: 13 },
      { name: 'Проект 14', id: 14 },
      { name: 'Проект 15', id: 15 },
    ],
  },
  reducers: {
    addProject: (state: any, data: { payload: any }) => {
      state.projects.push(data.payload);
    },
  },
});

export const { addProject } = projectsReducer.actions;

export default projectsReducer.reducer;
