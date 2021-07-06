/* eslint-disable promise/always-return */
import React from 'react';
import '../App.global.css';

const sharp = require('sharp');
const glob = require('glob');

const ResizeImage = (props: { path: string; resolution: string }) => {
  const makeFileNameCopie = (fileName: string) => {
    const test = fileName.split('.');
    const name = test[0];
    const extention = test[1];

    return `${name}(copie).${extention}`;
  };

  const resize = async (fileName: string) => {
    const fileNameCopie = makeFileNameCopie(fileName);
    console.log(props.resolution);
    await sharp(`${props.path}/${fileName}`)
      .resize(200, 200)
      .toFile(`${props.path}/${fileNameCopie}`);
  };

  const manageResize = () => {
    const res = glob.sync(`${props.path}/*.@(png|jpg|jpeg)`);
    res.forEach(function (item) {
      const test = item.split('/');
      resize(test.lastItem);
    });
  };

  return (
    <>
      <button type="button" className="button" onClick={manageResize}>
        <span role="img" aria-label="books" className="mr-1">
          ✅
        </span>
        Submit
      </button>
    </>
  );
};

export default ResizeImage;
