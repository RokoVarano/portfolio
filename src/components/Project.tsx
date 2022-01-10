import React from 'react';
import defaultPic from '../Utils';

interface Props {
  pictureUrl?: string,
  title?: string,
  technologies?: Array<string>,
  borderColor?: string,
  noBorder?: boolean,
  projectURL?: string,
  demoURL?: string,
}
const Project = ({
  noBorder = false, pictureUrl, title, technologies = [], borderColor, projectURL, demoURL,
}: Props) => {
  const technolist = technologies.map((item) => <li className="tecnology"><p>{item}</p></li>);

  return (
    <div
      className="project-component"
      style={noBorder ? {} : {
        border: `${borderColor} 0.2rem solid`,
        boxShadow: `0 0 2rem ${borderColor}, 0 0 1rem white`,
      }}
    >
      <div className="picture" style={{ backgroundImage: `url(${pictureUrl})` }} />
      <h3 className="title">
        {title}
        <div className="project-links">
          <a href={projectURL} target="_blank" rel="noreferrer"><i className="fab fa-github" role="button">{' '}</i></a>
          <a href={demoURL} target="_blank" rel="noreferrer"><i className="fas fa-play" role="button">{' '}</i></a>
        </div>
      </h3>
      <ul className="technologies">{technolist}</ul>
    </div>
  );
};

Project.defaultProps = {
  pictureUrl: defaultPic,
  title: 'no title',
  technologies: [],
  borderColor: 'white',
  noBorder: false,
  projectURL: '',
  demoURL: '',
};

export default Project;
