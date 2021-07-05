import React from 'react';
import '../App.global.css';

const SelectResolution = (props: {
  updateResolution: (arg0: string) => void;
}) => {
  return (
    <>
      <select
        className="mr-3 button"
        onChange={(e) => props.updateResolution(e.target.value)}
      >
        <option value="720">720px</option>
        <option value="1080">1080px</option>
      </select>
    </>
  );
};

export default SelectResolution;
