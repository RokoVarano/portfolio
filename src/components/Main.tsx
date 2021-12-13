import React, { FC } from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Main:FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <div id="main-component">
      {children}
    </div>
  );
};

export default Main;
