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
  },
});

export const { addQueue } = theConstructionQueueReducer.actions;

export default theConstructionQueueReducer.reducer;
