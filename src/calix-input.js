import React from 'react';

const CalixInputText = ({ value, onChange, name, placeholder }) => (
  <input
    type="text"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export default CalixInputText;
