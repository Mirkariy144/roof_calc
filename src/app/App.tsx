import React from 'react';
import s from './appStyles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectsListContainer } from '../ProjectsList/ProjectsListContainer';
import { TheConstructionQueueContainer } from '../TheConstructionQueue/TheConstructionQueue';
import { SectionsListContainer } from '../SectionList/SectionListContainer';
import { RoofListContainer } from '../RoofListContainer/RoofListContainer';
import Userfront, { LoginForm } from '@userfront/toolkit';
import { RegistrationForm } from '../auth/RegistrationForm';

function App() {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route path="/" element={<ProjectsListContainer />} />
        <Route path=":projectId" element={<TheConstructionQueueContainer />} />
        <Route path=":projectId/:queueId" element={<SectionsListContainer />} />
        <Route
          path=":projectId/:queueId/:sectionId"
          element={<RoofListContainer />}
        />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<RegistrationForm />} />
      </Routes>
    </div>
  );
}

export default App;
