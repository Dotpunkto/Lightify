import React from 'react';
import '../App.global.css';

const SelectGreyscaleOption = (props: {
  updateGreyscale: (arg0: boolean) => void;
}) => {
  return (
    <>
      <select
        className="mr-3 button"
        onChange={(e) => props.updateGreyscale(e.target.value === 'true')}
      >
        <option value="false">Normal</option>
        <option value="true">Greyscale</option>
      </select>
    </>
  );
};

export default SelectGreyscaleOption;
