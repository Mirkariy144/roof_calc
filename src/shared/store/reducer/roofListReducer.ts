import { createSlice } from '@reduxjs/toolkit';

let idChecker = 0;

const roofListReducer = createSlice({
  name: 'RoofList',
  initialState: {
    layers: [],
  },
  reducers: {
    addRoofType: (state: any, data: { payload: any }) => {
      state.layers.push({
        name: data.payload.text,
        squareMeters: data.payload.squareMeters,
        sectionId: data.payload.sectionId,
        queueId: data.payload.queueId,
        projectId: data.payload.projectId,
        roofTypeId: ++idChecker,
        roofLayers: data.payload.roofLayers,
      });
    },
  },
});

export const { addRoofType } = roofListReducer.actions;

export default roofListReducer.reducer;
