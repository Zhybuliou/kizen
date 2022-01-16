import React from 'react';
import './button.scss';


const Button = ({
  position,
  top,
  left,
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
    className="blue-button"
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
    }}
  >
    {children}
  </button>
);

export default Button;