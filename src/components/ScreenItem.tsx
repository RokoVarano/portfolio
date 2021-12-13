import React, { FC } from 'react';

interface Props {
  child: React.ReactNode,
  style?: object,
  colorWash?: boolean,
  id: string
}

const ScreenItem:FC<Props> = (props: Props) => {
  const {
    child, style, colorWash, id,
  } = props;
  return (
    <div className="screenitem-component" style={style} id={id}>
      <div className="background-color" style={{ display: colorWash ? 'flex' : 'none' }} />
      {child}
    </div>
  );
};

ScreenItem.defaultProps = {
  style: {},
  colorWash: false,
};

export default ScreenItem;
