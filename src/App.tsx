/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import './App.global.css';
import SelectDirectory from './componants/OpenDirectory';
import SelectResolution from './componants/SelectResolution';
import ResizeImage from './componants/ResizeImage';
import SelectGreyscaleOption from './componants/SelectGreyscaleOption';

const Form = () => {
  const [path, setPath] = useState<string>('');
  const [resolution, setResolution] = useState<string>('720x480');
  const [greyscale, setGreyscale] = useState<boolean>(false);

  const updatePath = (value: string) => {
    setPath(value);
  };

  const updateResolution = (value: string) => {
    setResolution(value);
  };

  const updateGreyscale = (value: boolean) => {
    setGreyscale(value);
  };

  return (
    <div>
      <h1 className="text-center">Lightify</h1>
      <div className="Hello">
        <SelectDirectory updatePath={updatePath} />
        <SelectResolution updateResolution={updateResolution} />
        <SelectGreyscaleOption updateGreyscale={updateGreyscale} />
        <ToastProvider>
          <ResizeImage
            path={path}
            resolution={resolution}
            greyscale={greyscale}
          />
        </ToastProvider>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Form} />
      </Switch>
    </Router>
  );
}
