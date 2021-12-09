import React from 'react';
import defaultPic from '../Utils';

interface Props {
  pictureUrl?: string,
  title?: string,
  technologies?: Array<string>
}
const Project = ({ pictureUrl, title, technologies = [] }: Props) => {
  const technolist = technologies.map((item) => <li className="tecnology">{item}</li>);

  return (
    <div className="project-component">
      <div className="picture" style={{ backgroundImage: `url(${pictureUrl})` }} />
      <h3 className="title">{title}</h3>
      <ul className="technologies">{technolist}</ul>

    </div>
  );
};

Project.defaultProps = {
  pictureUrl: defaultPic,
  title: 'no title',
  technologies: [],
};

export default Project;
