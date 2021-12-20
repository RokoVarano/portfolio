import React, { FC } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Slider from 'react-slick';
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
import CV from './components/CV';
import {
  fullStackCertificate,
  htmlCertificate,
  htmlLogo,
  javascriptCertificate,
  microverseLogo,
  reactLogo,
  reactReduxCertificate,
  rubyCertificate,
  rubyLogo, rubyRailsCertificate,
} from './components/assets/resources';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from './components/SectionTitle';

const App:FC = () => (
  <div className="App">
    <Name />
    <Sidebar />
    <Main>
      <ScreenItem child={<Home />} style={{ backgroundImage: `url(${defaultPic}` }} colorWash id="home" />
      <SectionTitle title="Projects" />
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
          <div id="project-container-mobile">
            <Slider arrows={false} infinite={false}>
              <Project title="Project A" technologies={['Rails', 'React', 'Jest', 'Redux']} borderColor="red" noBorder />
              <Project title="Project B" technologies={['Rails', 'React', 'Jest', 'Redux']} noBorder />
              <Project title="Project C" technologies={['Rails', 'React', 'Jest', 'Redux']} noBorder />
              <Project title="Project D" technologies={['Rails', 'React', 'Jest', 'Redux']} borderColor="blue" noBorder />
            </Slider>
          </div>
            )}
        id="projects-mobile"
      />

      <SectionTitle title="Certificates" />
      <ScreenItem
        child={(
          <div id="certificate-container">
            <Certificate title="React" icon={reactLogo} borderColor="#40CCFF" certificates={[reactReduxCertificate, javascriptCertificate]} />
            <Certificate title="Ruby / Rails" borderColor="red" icon={rubyLogo} certificates={[rubyRailsCertificate, rubyCertificate]} />
            <Certificate title="HTML / CSS" borderColor="#e54d24" icon={htmlLogo} certificates={[htmlCertificate]} />
            <Certificate title="Others" borderColor="#6F36FF" icon={microverseLogo} certificates={[fullStackCertificate]} />
          </div>
      )}
        id="certificates"
      />

      <SectionTitle title="Experience" />
      <ScreenItem
        child={(
          <Experience jobs={[fakeJob1, fakeJob2]} />
        )}
        style={{ flexWrap: 'wrap', overflowY: 'auto', justifyContent: 'space-evenly' }}
        id="recomendations"
      />

      <SectionTitle title="Contact" />
      <ScreenItem child={<Contact />} style={{ justifyContent: 'center' }} id="contact" />

      <SectionTitle title="Resume" />
      <ScreenItem
        child={(
          <PDFViewer width="800">
            <CV />
          </PDFViewer>
          )}
        id="resume"
        style={{ justifyContent: 'center' }}
      />
    </Main>
  </div>
);
export default App;
