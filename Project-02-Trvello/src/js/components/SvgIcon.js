import React from 'react';

const url = '../../../assets/sprite.svg';


const SvgIcon = props => {
  return (
    <svg viewBox="0 0 16 16" className={`icon icon-${props.icon} ${props.className}`}>
      <use xlinkHref={`${url}#icon-${props.icon}`} />
    </svg>
  );
};

export default SvgIcon;
