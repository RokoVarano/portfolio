import React, { FC } from 'react';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles.scss';
import ScreenItem from './components/ScreenItem';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

const App:FC = () => (
  <div className="App">
    <Name />
    <Sidebar />
    <Main>
      <ScreenItem child={<Home />} />
      <ScreenItem child={(
        <div id="project-container">
          <Project title="Project A" technologies={['Rails', 'React', 'Jest', 'Redux']} />
          <Project title="Project B" technologies={['Rails', 'React', 'Jest', 'Redux']} />
          <Project title="Project C" technologies={['Rails', 'React', 'Jest', 'Redux']} />
          <Project title="Project D" technologies={['Rails', 'React', 'Jest', 'Redux']} />
        </div>
      )}
      />
      <ScreenItem child={<Contact />} style={{ justifyContent: 'center' }} />
    </Main>
  </div>
);
export default App;
