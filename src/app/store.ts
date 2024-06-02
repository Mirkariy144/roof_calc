import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "../shared/store/reducer/projectReducer";

let store = configureStore({
  reducer: {
    Projects: projectsReducer
  },
})

window.store = store;
export type StoreType = typeof store;
export type AppStateType = ReturnType<StoreType['getState']>;
export default store;