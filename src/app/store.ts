import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../shared/store/reducer/projectReducer';
import theConstructionQueueReducer from '../shared/store/reducer/theConstructionQueueReducer';
import sectionsReducer from '../shared/store/reducer/sectionsReducer';

let store = configureStore({
  reducer: {
    Projects: projectsReducer,
    ProjectQueue: theConstructionQueueReducer,
    Sections: sectionsReducer,
  },
});

window.store = store;
export type StoreType = typeof store;
export type AppStateType = ReturnType<StoreType['getState']>;
export default store;
