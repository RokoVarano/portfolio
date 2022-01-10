/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  FC, useEffect, useRef, useState,
} from 'react';

const Sidebar:FC = () => {
  const homeRef = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const certificatesRef = useRef<HTMLLIElement>(null);
  const recomendationsRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);
  const resumeRef = useRef<HTMLLIElement>(null);

  const [currentRef, setCurrentRef] = useState<React.RefObject<HTMLLIElement>>();

  useEffect(() => {
    if (currentRef === undefined) return;

    const refs = [homeRef, projectsRef, certificatesRef, recomendationsRef, contactRef, resumeRef];

    refs.forEach((ref) => ref.current?.classList.remove('turn-on'));

    currentRef.current?.classList.add('turn-on');
  }, [currentRef]);

  return (

    <nav id="sidebar-component">
      <div id="top-separator" />

      <ul>
        <li ref={homeRef} onClick={() => setCurrentRef(homeRef)}><a href="#home"><h4>Home</h4></a></li>
        <li ref={projectsRef} onClick={() => setCurrentRef(projectsRef)}><a href="#projects"><h4>Projects</h4></a></li>
        <li ref={certificatesRef} onClick={() => setCurrentRef(certificatesRef)}><a href="#certificates"><h4>Certificates</h4></a></li>
        {/* <li ref={recomendationsRef} onClick={() => setCurrentRef(recomendationsRef)}><a href="#recomendations"><h4>Experience</h4></a></li> */}
        <li ref={contactRef} onClick={() => setCurrentRef(contactRef)}><a href="#contact"><h4>Contact</h4></a></li>
        <li ref={resumeRef} onClick={() => setCurrentRef(resumeRef)}><a href="#resume"><h4>Resume.pdf</h4></a></li>
      </ul>
    </nav>
  );
};
export default Sidebar;
