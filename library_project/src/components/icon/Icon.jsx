import React from 'react'
import { SvgIcon } from './Icon.style';

const Icon = ({path,icon, hoverColor}) => {
  return (
    <SvgIcon
      hoverColor={hoverColor}
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      fill="currentColor"
      className={`bi bi-${icon}`}
      >
      <path d={path} />
    </SvgIcon>
  );
}

export default Icon