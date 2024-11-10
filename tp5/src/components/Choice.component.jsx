import React from 'react';

const Choice = ({ options, onChange }) => {
  return (
      <select onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};

export default Choice;
