import React from 'react';
import s from './appStyles/App.module.css';
import { Route, Routes } from 'react-router-dom';
import { ProjectsListContainer } from '../ProjectsList/ProjectsListContainer';
import { TheConstructionQueueContainer } from '../TheConstructionQueue/TheConstructionQueue';
import { SectionsListContainer } from '../SectionList/SectionListContainer';
import { RoofListContainer } from '../RoofListContainer/RoofListContainer';
import { Registration } from '../registration/Registration';
import { Login } from '../login/Login';
import { AuthCheker } from '../AuthCheker/AuthCheker';

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
        <Route path="registration" element={<Registration />} />
        <Route
          path="login"
          element={
            <AuthCheker>
              <Login />
            </AuthCheker>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
