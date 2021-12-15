import React, { FC } from 'react';
import Name from './components/Name';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './styles.scss';
import ScreenItem from './components/ScreenItem';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Certificate from './components/Certificate';
import defaultPic, { fakeJob1, fakeJob2 } from './Utils';
import Experience from './components/Experience';

const App:FC = () => (
  <div className="App">
    <Name />
    <Sidebar />
    <Main>
      <ScreenItem child={<Home />} style={{ backgroundImage: `url(${defaultPic}` }} colorWash id="home" />
      <ScreenItem
        child={(
          <div id="project-container">
            <Project title="Project A" technologies={['Rails', 'React', 'Jest', 'Redux']} borderColor="red" />
            <Project title="Project B" technologies={['Rails', 'React', 'Jest', 'Redux']} />
            <Project title="Project C" technologies={['Rails', 'React', 'Jest', 'Redux']} />
            <Project title="Project D" technologies={['Rails', 'React', 'Jest', 'Redux']} borderColor="blue" />
          </div>
      )}
        id="projects"
      />
      <ScreenItem
        child={(
          <div id="certificate-container">
            <Certificate title="React" />
            <Certificate title="Rails" />
            <Certificate title="English" />
            <Certificate title="HTML" />
          </div>
      )}
        id="certificates"
      />
      <ScreenItem
        child={(
          <Experience jobs={[fakeJob1, fakeJob2]} />
        )}
        style={{ flexWrap: 'wrap', overflowY: 'auto', justifyContent: 'space-evenly' }}
        id="recomendations"
      />
      <ScreenItem child={<Contact />} style={{ justifyContent: 'center' }} id="contact" />
    </Main>
  </div>
);
export default App;
