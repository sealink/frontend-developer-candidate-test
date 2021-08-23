import React from 'react';

const ChevronRightSvg = ({
  title = '',
  width = '8px',
  height = '14px',
  fill = 'none',
  stroke = 'white',
  strokeWidth = '2px',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 8 14'
      width={width}
      height={height}
    >
      {title && <title>{title}</title>}
      <g fill={fill}>
        <path
          d='M1.02942 1.5L5.9706 7L1.02942 12.5'
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
};

export default ChevronRightSvg;
