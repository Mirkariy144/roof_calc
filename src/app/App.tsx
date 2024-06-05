import React from 'react';
import s from './appStyles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectsListContainer } from '../ProjectsList/ProjectsListContainer';
import { TheConstructionQueueContainer } from '../TheConstructionQueue/TheConstructionQueue';

function App() {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path="/" element={<ProjectsListContainer />} />
        <Route
          path=":name/:projectId"
          element={<TheConstructionQueueContainer />}
        />
      </Routes>
    </div>
  );
}

export default App;
