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
        squareMeters: data.payload.squareMeters * 1,
        sectionId: data.payload.sectionId * 1,
        queueId: data.payload.queueId * 1,
        projectId: data.payload.projectId * 1,
        roofTypeId: ++idChecker,
        roofLayers: data.payload.roofLayers,
      });
    },
    editRoofType: (state: any, data: { payload: any }) => {
      state.layers = state.layers.map((item: any) => {
        if (item.roofTypeId === data.payload.elementId) {
          item.name = data.payload.text;
          item.squareMeters = data.payload.squareMeters;
          item.roofLayers = data.payload.roofLayers.name
            ? data.payload.roofLayers
            : item.roofLayers;
        }

        return item;
      });
    },
  },
});

export const { addRoofType, editRoofType } = roofListReducer.actions;

export default roofListReducer.reducer;
