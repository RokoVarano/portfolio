import React, { FC } from 'react';

interface Props {
  child: React.ReactNode,
}

const ScreenItem:FC<Props> = (props: Props) => {
  const { child } = props;
  return (
    <div className="screenitem-component">
      <div className="background-color" />
      {child}
    </div>
  );
};

export default ScreenItem;
