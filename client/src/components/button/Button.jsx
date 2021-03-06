import React from 'react';
import './button.scss';


const Button = ({
  styleBtn,
  position,
  top,
  left,
  right,
  border,
  color,
  colorText,
  children,
  height,
  onClick,
  radius,
  width,
  type,
}) => (
  <button
    className={`blue-button ${styleBtn}`}
    onClick={onClick}
    type={type}
    style={{
      color: colorText,
      backgroundColor: color,
      border,
      borderRadius: radius,
      height,
      width,
      position,
      top,
      left,
      right
    }}
  >
    {children}
  </button>
);

export default Button;
