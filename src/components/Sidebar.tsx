import React from 'react';

const Sidebar = () => (
  <nav id="sidebar-component">
    <div id="top-separator" />

    <ul>
      <li><a href="#home"><div className="bluebar"><h4>Home</h4></div></a></li>
      <li><a href="#projects"><div className="bluebar"><h4>Projects</h4></div></a></li>
      <li><a href="#certificates"><div className="bluebar"><h4>Certificates</h4></div></a></li>
      <li><a href="#recomendations"><div className="bluebar"><h4>Experience</h4></div></a></li>
      <li><a href="#contact"><div className="bluebar"><h4>Contact</h4></div></a></li>
      <li><a href="#resume"><div className="bluebar"><h4>Resume.pdf</h4></div></a></li>
    </ul>
  </nav>
);

export default Sidebar;
