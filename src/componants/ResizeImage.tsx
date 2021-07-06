/* eslint-disable promise/always-return */
import React from 'react';
import { AppearanceTypes, useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert';
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

  const makeToast = (content: string, type: AppearanceTypes) => {
    addToast(content, {
      appearance: type,
      autoDismiss: true,
    });
  };

  const makeResize = () => {
    const res = glob.sync(`${props.path}/*.@(png|jpg|jpeg)`);

    if (res.length === 0) {
      makeToast('The directory does not contain a valid image', 'info');
    } else {
      res.forEach(function (item) {
        const test = item.split('/');
        resize(test.lastItem);
      });
      makeToast('Action completed', 'success');
    }
  };

  const displayConfirmMessage = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            makeResize();
          },
        },
        {
          label: 'No',
          onClick: () => {
            return false;
          },
        },
      ],
    });
  };

  const manageResize = () => {
    if (props.path === '') {
      makeToast('Select a directory', 'error');
    } else {
      displayConfirmMessage();
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
