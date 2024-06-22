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
      data.payload.roofLayers.forEach((item: any) => {
        if (item.composition) {
          item.composition.scopeOfWork(data.payload.squareMeters * 1, 3, 25);
        }
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

    deleteRoofType: (state: any, data: { payload: any }) => {
      state.layers = state.layers.filter((item: any) => {
        if (data.payload.projectId) {
          return item.projectId !== data.payload.projectId;
        } else if (data.payload.queueId) {
          return item.queueId !== data.payload.queueId;
        } else if (data.payload.sectionId) {
          return item.sectionId !== data.payload.sectionId;
        } else if (data.payload.roofTypeId) {
          return item.roofTypeId !== data.payload.roofTypeId;
        }
      });
    },
  },
});

export const { addRoofType, editRoofType, deleteRoofType } =
  roofListReducer.actions;

export default roofListReducer.reducer;
