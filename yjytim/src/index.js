import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Home from './pages/Home.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Define a new component for routing
function AppWithRouter() {
  return (
    // <BrowserRouter>
    <Routes>
      <Switch>
        <Route path="/" element={<Home />} /> 
      </Switch>
      {/* <Route path="/work" element={<Work />} /> */}
      {/* Add more routes here */}
    </Routes>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <AppWithRouter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
