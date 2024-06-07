import React from 'react';
import s from './appStyles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectsListContainer } from '../ProjectsList/ProjectsListContainer';
import { TheConstructionQueueContainer } from '../TheConstructionQueue/TheConstructionQueue';
import { SectionListContainer } from '../SectionList/SectionListContainer';

function App() {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path="/" element={<ProjectsListContainer />} />
        <Route path=":projectId" element={<TheConstructionQueueContainer />} />
        <Route path=":projectId/:queueId" element={<SectionListContainer />} />
      </Routes>
    </div>
  );
}

export default App;
