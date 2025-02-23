<<<<<<< HEAD
// Button.jsx
import React from 'react';
import './Input.css';

const Input = ({ children, onClick }) => {
  return (
    <Input className="input" onClick={onClick}>
      {children}
    </Input>
=======
const Input = ({ type, placeholder, value, onChange, onKeyPress }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
    />
>>>>>>> 599cf48 (added zustand and window events)
  );
};

export default Input;