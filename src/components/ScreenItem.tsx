import React, { FC } from 'react';

interface Props {
  child: React.ReactNode,
  style?: object,
}

const ScreenItem:FC<Props> = (props: Props) => {
  const { child, style } = props;
  return (
    <div className="screenitem-component" style={style}>
      <div className="background-color" />
      {child}
    </div>
  );
};

ScreenItem.defaultProps = {
  style: {},
};

export default ScreenItem;
