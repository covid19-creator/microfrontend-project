// Button.jsx
import React from 'react';
import './Input.css';

const Input = ({ children, onClick }) => {
  return (
    <Input className="input" onClick={onClick}>
      {children}
    </Input>
  );
};

export default Input;