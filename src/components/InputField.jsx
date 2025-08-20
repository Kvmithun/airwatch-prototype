import React from 'react';
import '../styles/input.css';

export default function InputField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
