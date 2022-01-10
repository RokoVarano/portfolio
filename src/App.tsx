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
import ExperienceMobile from './components/ExperienceMobile';

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
            <Project title="Task List + User Profile" technologies={['Rails', 'SASS', 'Postgresql']} borderColor="red" projectURL="https://github.com/RokoVarano/Tasker" demoURL="https://desolate-retreat-49950.herokuapp.com/" pictureUrl="https://github.com/RokoVarano/Tasker/raw/main/main.png" />
            <Project title="DnD API mobile app" technologies={['React', 'Redux', 'Jest', 'SASS']} pictureUrl="https://github.com/RokoVarano/dyd_api_searcher/raw/develop/app_screenshot.png" projectURL="https://github.com/RokoVarano/dyd_api_searcher/tree/develop" demoURL="https://dndapiviewer.netlify.app/" />
            <Project title="Hotel website example" technologies={['Rails', 'React', 'Postgresql']} pictureUrl="https://github.com/AdedayoOpeyemi/hotel_services_frontend/blob/development/src/components/assets/login.png?raw=true" demoURL="https://hotel-services-2021.netlify.app/" projectURL="https://github.com/RokoVarano/hotel_services_backend" />
            <Project title="Weather API App" technologies={['JS', 'Webpack', 'SASS']} borderColor="blue" projectURL="https://github.com/RokoVarano/Weather-app/tree/develop" pictureUrl="https://github.com/RokoVarano/Weather-app/blob/develop/weatherapp.png?raw=true" demoURL="https://suspicious-roentgen-bd14e2.netlify.app/" />
          </div>
      )}
        id="projects"
      />
      <ScreenItem
        child={(
          <div id="project-container-mobile">
            <Slider arrows={false} infinite={false}>
              <Project title="Task List + User Profile" technologies={['Rails', 'SASS', 'Postgresql']} borderColor="red" projectURL="https://github.com/RokoVarano/Tasker" demoURL="https://desolate-retreat-49950.herokuapp.com/" pictureUrl="https://github.com/RokoVarano/Tasker/raw/main/main.png" noBorder />
              <Project title="DnD API mobile app" technologies={['React', 'Redux', 'Jest', 'SASS']} pictureUrl="https://github.com/RokoVarano/dyd_api_searcher/raw/develop/app_screenshot.png" projectURL="https://github.com/RokoVarano/dyd_api_searcher/tree/develop" demoURL="https://dndapiviewer.netlify.app/" noBorder />
              <Project title="Hotel website example" technologies={['Rails', 'React', 'Postgresql']} pictureUrl="https://github.com/AdedayoOpeyemi/hotel_services_frontend/blob/development/src/components/assets/login.png?raw=true" demoURL="https://hotel-services-2021.netlify.app" projectURL="https://github.com/RokoVarano/hotel_services_backend" noBorder />
              <Project title="Weather API App" technologies={['JS', 'Webpack', 'SASS']} borderColor="blue" projectURL="https://github.com/RokoVarano/Weather-app/tree/develop" pictureUrl="https://github.com/RokoVarano/Weather-app/blob/develop/weatherapp.png?raw=true" demoURL="https://suspicious-roentgen-bd14e2.netlify.app/" noBorder />
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
          <>
            <Experience jobs={[fakeJob1, fakeJob2]} />
            <ExperienceMobile jobs={[fakeJob1, fakeJob2]} />
          </>
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
