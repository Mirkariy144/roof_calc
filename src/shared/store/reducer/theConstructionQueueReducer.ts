import { createSlice } from '@reduxjs/toolkit';

let idChecker = 0;

const theConstructionQueueReducer = createSlice({
  name: 'ProjectQueue',
  initialState: {
    projectQueue: [],
  },
  reducers: {
    addQueue: (state: any, data: { payload: any }) => {
      state.projectQueue.push({
        name: data.payload.name,
        queueId: ++idChecker,
        projectId: data.payload.projectId * 1,
      });
    },

    editQueue: (state: any, data: { payload: any }) => {
      state.projectQueue.find(
        (item: any) => item.queueId === data.payload.elementId
      ).name = data.payload.name;
    },

    deleteQueue: (state: any, data: { payload: any }) => {
      if (data.payload.projectId) {
        state.projectQueue = state.projectQueue.filter(
          (item: any) => item.projectId !== data.payload.projectId
        );
      } else {
        state.projectQueue = state.projectQueue.filter(
          (item: any) => item.queueId !== data.payload.queueId
        );
      }
    },
  },
});

export const { addQueue, editQueue, deleteQueue } =
  theConstructionQueueReducer.actions;

export default theConstructionQueueReducer.reducer;
