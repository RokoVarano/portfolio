import React from 'react';
import defaultPic from '../Utils';

interface Props {
  pictureUrl?: string,
  title?: string,
  technologies?: Array<string>,
  borderColor?: string,
}
const Project = ({
  pictureUrl, title, technologies = [], borderColor,
}: Props) => {
  const technolist = technologies.map((item) => <li className="tecnology"><p>{item}</p></li>);

  return (
    <div
      className="project-component"
      style={{
        border: `${borderColor} 0.2rem solid`,
        boxShadow: `0 0 2rem ${borderColor}, 0 0 1rem white`,
      }}
    >
      <div className="picture" style={{ backgroundImage: `url(${pictureUrl})` }} />
      <h3 className="title">
        {title}
        <div className="project-links">
          <i className="fab fa-github" role="button">{' '}</i>
          <i className="fas fa-play" role="button">{' '}</i>
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
};

export default Project;
