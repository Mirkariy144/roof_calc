import React from 'react';
import s from './appStyles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectsListContainer } from '../ProjectsList/ProjectsListContainer';
import { TheConstructionQueueContainer } from '../TheConstructionQueue/TheConstructionQueue';
import { SectionsListContainer } from '../SectionList/SectionListContainer';
import { RoofListContainer } from '../RoofListContainer/RoofListContainer';
import { AuthCheker } from '../AuthCheker/AuthCheker';
import { SignIn } from '../SignIn/SignIn';

function App() {
  return (
    <div className={s.appWrapper}>
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheker>
              <ProjectsListContainer />
            </AuthCheker>
          }
        />
        <Route
          path=":projectId"
          element={
            <AuthCheker>
              <TheConstructionQueueContainer />
            </AuthCheker>
          }
        />
        <Route
          path=":projectId/:queueId"
          element={
            <AuthCheker>
              <SectionsListContainer />
            </AuthCheker>
          }
        />
        <Route
          path=":projectId/:queueId/:sectionId"
          element={
            <AuthCheker>
              <RoofListContainer />
            </AuthCheker>
          }
        />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
