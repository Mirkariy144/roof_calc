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
        projectId: data.payload.projectId,
      });
    },

    editQueue: (state: any, data: { payload: any }) => {
      state.projectQueue.find(
        (item: any) => item.queueId === data.payload.elementId
      ).name = data.payload.name;
    },
  },
});

export const { addQueue, editQueue } = theConstructionQueueReducer.actions;

export default theConstructionQueueReducer.reducer;
