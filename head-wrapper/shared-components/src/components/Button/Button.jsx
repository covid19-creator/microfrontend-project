<<<<<<< HEAD
// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
=======
const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>
>>>>>>> 599cf48 (added zustand and window events)
      {children}
    </button>
  );
};

export default Button;