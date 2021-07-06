/* eslint-disable promise/always-return */
import React from 'react';
import { useToasts } from 'react-toast-notifications';
import '../App.global.css';

const sharp = require('sharp');
const glob = require('glob');

const ResizeImage = (props: { path: string; resolution: string }) => {
  const { addToast } = useToasts();

  const makeFileNameCopie = (fileName: string) => {
    const test = fileName.split('.');
    const name = test[0];
    const extention = test[1];

    return `${name}(copie).${extention}`;
  };

  const resize = async (fileName: string) => {
    const fileNameCopie = makeFileNameCopie(fileName);
    const resol = props.resolution.split('x');
    const h = parseInt(resol[0], 10);
    const w = parseInt(resol[1], 10);

    await sharp(`${props.path}/${fileName}`, {
      withoutEnlargement: false,
    })
      .resize(h, w)
      .toFile(`${props.path}/${fileNameCopie}`);
  };

  const manageResize = () => {
    if (props.path === '') {
      addToast('Select a directory', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      const res = glob.sync(`${props.path}/*.@(png|jpg|jpeg)`);

      if (res.lenght === 0) {
        addToast('The directory does not contain a valid image', {
          appearance: 'error',
          autoDismiss: true,
        });
      }

      res.forEach(function (item) {
        const test = item.split('/');
        resize(test.lastItem);
      });
      addToast('Action completed', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
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
