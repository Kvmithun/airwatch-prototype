import React from 'react';
import InputField from './InputField';
import Button from './Button';
import '../styles/placeholder.css';

export default function PollutionForm() {
  return (
    <div className="placeholder">
      <h3>Report Pollution</h3>
      <InputField placeholder="Enter location..." />
      <Button label="Submit" onClick={() => alert('Form submitted')} />
    </div>
  );
}
