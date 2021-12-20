import React, { FC } from 'react';

interface Props {
  title?: string
}

const SectionTitle:FC<Props> = ({ title = '' }: Props) => (
  <h1 className="sectionTitle">{title}</h1>
);

SectionTitle.defaultProps = {
  title: '',
};

export default SectionTitle;
