import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

const Hello = () => {
  return (
    <div>
      <h1 className="text-center">Lightify</h1>
      <div className="Hello">
        <button type="button" className="mr-3 button">
          <span role="img" aria-label="books" className="mr-1">
            📁
          </span>
          Select directory...
        </button>
        <select className="mr-3 button">
          <option value="">720px</option>
          <option value="">1080px</option>
        </select>
        <button type="button" className="button">
          <span role="img" aria-label="books" className="mr-1">
            ✅
          </span>
          Submit
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
