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
        <option value="720x480">480px</option>
        <option value="1280x720">720px</option>
        <option value="1920x1080">1080px</option>
      </select>
    </>
  );
};

export default SelectResolution;
