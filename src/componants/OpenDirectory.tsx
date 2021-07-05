import React, { useState } from 'react';
import '../App.global.css';

const electron = window.require('electron');
const { remote } = electron;
const { dialog } = remote;

const SelectDirectory = (props: { updatePath: (arg0: string) => void }) => {
  const [path, setPath] = useState<string>('Select directory...');

  const open = () => {
    dialog
      .showOpenDialog({
        defaultPath: '/Users/dotpunkto',
        properties: ['openDirectory'],
      })
      // eslint-disable-next-line promise/always-return
      .then((result: { canceled: boolean; filePaths: Array<string> }) => {
        setPath(result.filePaths[0]);
        props.updatePath(result.filePaths[0]);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <button type="button" className="mr-3 button" onClick={open}>
        <span role="img" aria-label="books" className="mr-1">
          📁
        </span>
        {path}
      </button>
    </>
  );
};

export default SelectDirectory;
